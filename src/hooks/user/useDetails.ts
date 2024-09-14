import {
  getPlatFormNft,
  pinataUpload,
  useCreateBidNft,
  usePlatformKey,
  usePlatformNft,
  userDetails,
} from "@/actions/auth";
import axios from "axios";
import { NftExtendedType } from "@/types/common";

import { useEffect, useState } from "react";

// import formidable from "formidable";
// import { readFileSync } from "fs";

import { PinataSDK } from "pinata";
import { NftType } from "@prisma/client";
// api key 8d3c27e530c551660f36
// api secret key 8ce7c6e6a60ac7603901712bec0325de84f07286a457e799dd0425abbe25925a
const pinata = new PinataSDK({
  pinataJwt:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3MGRmZjcxYy01ZmY0LTRiNTEtYmMzYy03NTkwZDI3YzI3OWEiLCJlbWFpbCI6InN1amFsaGFyaXNoc2hhaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiOGQzYzI3ZTUzMGM1NTE2NjBmMzYiLCJzY29wZWRLZXlTZWNyZXQiOiI4Y2U3YzZlNmE2MGFjNzYwMzkwMTcxMmJlYzAzMjVkZTg0ZjA3Mjg2YTQ1N2U3OTlkZDA0MjVhYmJlMjU5MjVhIiwiZXhwIjoxNzU0NzY0MTU3fQ.K8xnq30gIIHUbxxswl0Z08bXnp0LtBzKoTahqf9J8Kk",
  pinataGateway: "amethyst-significant-gecko-805.mypinata.cloud",
});
// type TUserDetails = {
//     name:string;
//     email:string;
//     walletAddress:Address;
// }
// 32a4dfea.8d1d4b285573409fb5fd7557926fedeb
export const registerUser = async () => {
  const walletAddress = "0x1843144852262F9bf6519633B15E5e00Cd8b4eF8";
  // const walletAddress = getAccount(config).address;
  // if (!walletAddress) {
  //   return null
  // }
  const details = await userDetails(walletAddress);
  // console.log(create);
};

type ImageUploadType = {
  url: string | null;
  duplicate: boolean;
};

export const uploadToNftStorage = async ({
  DataImage,
}: {
  DataImage: File;
}): Promise<ImageUploadType> => {
  // try {
  // const arrayBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
  //   const reader = new FileReader();
  //   reader.onload = () => resolve(reader.result as ArrayBuffer);
  //   reader.onerror = reject;
  //   reader.readAsArrayBuffer(DataImage);
  // });

  // const file = new File([arrayBuffer], DataImage.name, {
  //   type: DataImage.type,
  // });

  // Replace pinata.upload.file with your actual upload function

  //   if (upload.IpfsHash) {
  return pinataUpload(DataImage);
  //   } else {
  //     return {
  //       url: null,
  //       duplicate: false,
  //     };
  //   }
  // } catch (error) {
  //   console.log(error);
  //   return {
  //     url: null,
  //     duplicate: false,
  //   };
  // }
};

export const createBidNft = async () => {
  const walletAddress = "0x1059Ed65AD58ffc83642C9Be3f24C250905a28FB";
  const name = "Binosica";
  const image =
    "https://cdn.dribbble.com/userupload/3271377/file/original-0f95a6e8fc0aca614f46a6251c7403e9.png?resize=1200x1200&vertical=center";
  const shortDescription = "zero minted by the great artist";
  const description = "This is a platform generated NFT. It is a bid NFT";
  const BidEndTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const nft = await useCreateBidNft({
    walletAddress,
    image,
    name,
    description,
    shortDescription,
    BidEndTime,
  });
};

export const getPlatFormNftData = () => {
  const [nftData, setNftData] = useState<NftExtendedType[]>([]);
  const nfts = async () => {
    const nft = await getPlatFormNft();
    setNftData(nft as NftExtendedType[]);
  };

  useEffect(() => {
    if (nftData.length === 0) {
      nfts();
    }
  }, [nftData]);

  return {
    nftData,
  };
};
export const getKey = async () => {
  const key = await usePlatformKey();
  return key;
};

type ResponseType = {
  data: {
    success: boolean;
    file: string;
  };
};

export const createPlatformNft = async ({
  walletAddress,
  name,
  description,
  shortDescription,
  imageFile,
  type,
}: {
  walletAddress: string;
  name: string;
  description: string;
  shortDescription: string;
  imageFile: File;
  type: NftType;
}) => {
  let formdata = new FormData();
  formdata.append("file", imageFile);
  let bodyContent = formdata;

  let reqOptions = {
    url: "http://localhost:3000/api/upload",
    method: "POST",
    data: bodyContent,
  };

  let response: ResponseType = await axios.request(reqOptions);
  const nft = await usePlatformNft({
    walletAddress,
    image: response.data.file,
    name,
    description,
    shortDescription,
    type,
  });

  return nft;
};

export const createAiNft = async ({
  walletAddress,
  name,
  description,
  shortDescription,
  imageFile,
  type,
}: {
  walletAddress: string;
  name: string;
  description: string;
  shortDescription: string;
  imageFile: File;
  type: NftType;
}) => {

  

  let formdata = new FormData();
  formdata.append("file", imageFile);
  let bodyContent = formdata;

  let reqOptions = {
    url: "http://localhost:3000/api/upload",
    method: "POST",
    data: bodyContent,
  };

  let response: ResponseType = await axios.request(reqOptions);
  const nft = await usePlatformNft({
    walletAddress,
    image: response.data.file,
    name,
    description,
    shortDescription,
    type,
  });

  return nft;
};
