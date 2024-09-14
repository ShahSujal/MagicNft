"use client"
import React, { useState } from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import Step3 from "./step3";
import { NftType } from "@prisma/client";
export enum creationType{
  AI_NFT = "AI_NFT",
  BIDDING_NFT = "BIDDING_NFT",
  PLATFORM_NFT = "PLATFORM_NFT"
}
export enum orderType {
  PRIVATE,
  PUBLIC
}
export interface LoadDataType {
  step: number;
  type: NftType; // Adjust the type if `creationType` is not a string
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  PriceInEth: number;
  orderType: orderType; // Adjust the type if `orderType` is not a string
  category: string[];
  isBid: boolean;
  BidEndTime: string; // Adjust the type if it's a Date or other type
  rewardEndDate: string; // Adjust the type if it's a Date or other type
  rewardPoints: number;
  images: string[];
}
type Props = {};
interface Nfts {
  id: string;
  creatorId: string;
  image: string;
  title: string;
  description: string;
  shortDescription?: string;
  orderType: string; // Assuming orderType is a string, adjust if it's an enum
  PriceInEth: number;
  type: string; // Assuming NftType is a string, adjust if it's an enum
  views: any[]; // Replace 'any' with the actual type if available
  likes: any[]; // Replace 'any' with the actual type if available
  isBid: boolean;
  BidEndTime?: Date;
  category: string[];
  rewardWinners: any[]; // Replace 'any' with the actual type if available
  rewardEndDate?: Date;
  rewardPoints?: number;
  rewardForceCancelled?: boolean;
  rewardTasks: any[]; // Replace 'any' with the actual type if available
  AuctionBids: any[]; // Replace 'any' with the actual type if available
  transactions: any[]; // Replace 'any' with the actual type if available
  status: string; // Assuming Status is a string, adjust if it's an enum
  createdAt: Date;
  updatedAt: Date;
}
const CreatePage = (props: Props) => {
  const [Step, setStep] = useState(0);

  const [data, setData] = useState<Nfts | null>(null);

  const [loadData, setLoadData] = useState<LoadDataType>({
    step: 0,
    type:NftType.Ai_generated,
    title: "",
    description: "",
    shortDescription: "",
    image: "",
    PriceInEth: 0,
    orderType:orderType.PUBLIC,
    category: [],
    isBid: false,
    BidEndTime: "",
    rewardEndDate: "",
    rewardPoints: 0,
    images:[]
  });

  const [image, setImage] = useState<string[]>([])

  return (
    <main className=" bg-[#c9d2e7] min-h-screen w-full relative ">
      <div className=" absolute left-1/3 bg-gradient-to-tr from-[#f6d6f7] to-[#ffdce0] blur-2xl w-24 h-44"></div>
      <div className=" absolute left-2/3 top-1/2 bg-gradient-to-tr from-[#faeefb] to-[#f7e9ea] blur-[80px] w-44 h-44"></div>

      {
      loadData.step === 0 ? <Step1 setLoadData={setLoadData} loadData={loadData}/> : loadData.step === 1 ? <Step2 setLoadData={setLoadData} loadData={loadData} setImage={setImage}/> : <Step3 setLoadData={setLoadData} loadData={loadData} images={image}/>
        }
    </main>
  );
};

export default CreatePage;
