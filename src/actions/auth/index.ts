"use server";

import { client } from "@/lib/prisma";
import { config } from "@/lib/provider/configprovider";
import { NftType } from "@prisma/client";

import { getAccount } from "@wagmi/core";
import { readFileSync } from "fs";
import { PinataSDK } from "pinata";
import { Address, getAddress } from "viem";
import { useConfig } from "wagmi";
// import   {getAccount} from ""

export const userDetails = async (walletAddress: string) => {
  //   const walletAddress = getAccount(config).address;
  if (!walletAddress) {
    return null;
  }
  const user = await client.user.findFirst({
    where: {
      walletAddress: walletAddress,
    },
  });
  if (user) {
    return user;
  } else {
    const create = await client.user.create({
      data: {
        walletAddress: walletAddress as string,
      },
    });
    return create;
  }
};
// Define the interface for the input props
interface PlatformGeneratedProps {
  walletAddress: string;
  image: string;
  name: string;
  description: string;
  shortDescription: string;
  type: NftType;
}

// Define the interface for the input props
interface BidGeneratedProps {
  walletAddress: string;
  image: string;
  name: string;
  description: string;
  shortDescription: string;
  BidEndTime: Date;
}

// Update the PLATFORM_GENERATED function to accept these props
export const usePlatformNft = async ({
  walletAddress,
  image,
  name,
  description,
  shortDescription,
  type,
}: PlatformGeneratedProps) => {
  const create = await client.nfts.create({
    data: {
      creatorId: walletAddress,
      image: image,
      title: name,
      description: description,
      shortDescription: shortDescription,
      orderType: "PUBLIC",
      PriceInEth: 0,
      type: type,
      isBid: false,
    },
  });

  if (create.id) {
    return{
      success: true,
      data: create,
    }
  }else{
    return{
      success: false,
      data: null,
    }
  }

};

export const useCreateBidNft = async ({
  walletAddress,
  image,
  name,
  description,
  shortDescription,
  BidEndTime,
}: BidGeneratedProps) => {
  const create = await client.nfts.create({
    data: {
      creatorId: walletAddress,
      image: image,
      title: name,
      description: description,
      shortDescription: shortDescription,
      orderType: "PUBLIC",
      PriceInEth: 21.3,
      type: "Platform_generated",
      isBid: true,
      BidEndTime: BidEndTime,
    },
  });
};

export const getPlatFormNft = async () => {
  const nft = await client.nfts.findMany({
    where: {
      type: "Platform_generated",
    },
    include: {
      user: true,
      views: true,
      likes: true,
    },
  });
  return nft;
};

/*
user image 
currency symbol
chainId
*/
// const pinata = new PinataSDK({
//   pinataJwt:process.env.PINATA_JWT!,
//   pinataGateway: process.env.PINATA_GATEWAY!,
// });
export const uploadToNft = async ({ DataImage }: { DataImage: File }) => {
  try {
    // Replace pinata.upload.file with your actual upload function
    const upload = await pinata.upload.file(DataImage);
    console.log(upload);

    if (upload.IpfsHash) {
      return {
        url: upload.IpfsHash,
        duplicate: upload.isDuplicate ?? false,
      };
    } else {
      return {
        url: null,
        duplicate: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      url: null,
      duplicate: false,
    };
  }
};
export const uploadToNftStoarges = async ({
  DataImage,
}: {
  DataImage: File;
}) => {
  try {
    const buffer = readFileSync(DataImage.webkitRelativePath);
    console.log(buffer);
    const arraybuffer = Uint8Array.from(buffer).buffer;
    console.log(arraybuffer);
    const file = new File([arraybuffer], DataImage.name, {
      type: DataImage.type,
    });
    console.log(file);
    const upload = await pinata.upload.file(file);
    console.log(upload);
  } catch (error) {
    console.log(error);
  }
};

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT!,
  pinataGateway: "amethyst-significant-gecko-805.mypinata.cloud",
});

export const pinataUpload = async (DataImage: File) => {
  const upload = await pinata.upload.file(DataImage);
  console.log(upload);
  if (upload.IpfsHash) {
    return {
      url: upload.IpfsHash,
      duplicate: upload.isDuplicate ?? false,
    };
  } else {
    return {
      url: null,
      duplicate: false,
    };
  }
};

export const usePlatformKey = async () => {
  const key = process.env.PINATA_JWT;
  return key;
};
