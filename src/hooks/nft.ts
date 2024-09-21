import { client } from "@/lib/prisma";
import { OrderType } from "@/types/common";
import { NftType, Status } from "@prisma/client";
const dummyNftData = {
  creatorId: "user123",
  image: "https://example.com/image.png",
  title: "Amazing NFT",
  description: "This is an amazing NFT.",
  shortDescription: "Amazing NFT",
  orderType: OrderType.PUBLIC,
  priceInEth: 1.5,
  type: NftType.Platform_generated,
  isBid: false,
  category:[],
  status:Status.ACTIVE,
};
export const createNft = async ({}) => {
  // client.nfts.create({
  //   data: dummyNftData,
  // });
};
