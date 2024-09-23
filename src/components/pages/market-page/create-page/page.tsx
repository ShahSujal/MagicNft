"use client";
import React, { useState } from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import Step3 from "./step3";
import { NftType, orderType } from "@prisma/client";
import { TLoadDataType } from "@/types/common";


type Props = {};

const CreatePage = (props: Props) => {
  const [loadData, setLoadData] = useState<TLoadDataType>({
    step: 0,
    imageFile: undefined,
    type: NftType.Ai_generated,
    title: "",
    description: "",
    shortDescription: "",
    image: "",
    PriceInEth: 0,
    orderType: orderType.PUBLIC,
    category: [],
    isBid: false,
    BidEndTime: "",
    rewardEndDate: "",
    rewardPoints: 0,
    address: "",
    images: [],
  });

  const [image, setImage] = useState<string[]>([]);

  return (
    <main className=" bg-[#c9d2e7] min-h-screen w-full relative ">
      <div className=" absolute left-1/3 bg-gradient-to-tr from-[#f6d6f7] to-[#ffdce0] blur-2xl w-24 h-44"></div>
      <div className=" absolute left-2/3 top-1/2 bg-gradient-to-tr from-[#faeefb] to-[#f7e9ea] blur-[80px] w-44 h-44"></div>

      {loadData.step === 0 ? (
        <Step1 setLoadData={setLoadData} loadData={loadData} />
      ) : loadData.step === 1 ? (
        <Step2
          setLoadData={setLoadData}
          loadData={loadData}
          setImage={setImage}
        />
      ) : (
        <Step3 setLoadData={setLoadData} loadData={loadData} images={image} />
      )}
    </main>
  );
};

export default CreatePage;
