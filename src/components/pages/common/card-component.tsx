import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CountdownButton from "./count-down";
import { formatNumber } from "@/lib/utils";
// import { NftType, Nfts, User } from "@prisma/client";
import { NftExtendedType } from "@/types/common";
type Props = {
  nft: NftExtendedType;
  setActive: React.Dispatch<React.SetStateAction<any>>;
};
const CardComponent = (props: Props) => {
  // console.log(props.endTimer);

  return (
    <Card className=" w-[300px] h-[350px] bg-[#ffffff31] mx-auto  ">
      <CardHeader className="relative">
        <Image
          width={500}
          height={500}
          className=" w-full h-[250px] object-cover rounded-lg"
          src={props.nft.image}
          alt="NFT"
        />

        {props.nft.isBid && props.nft.BidEndTime && (
          <CountdownButton endTiming={props.nft.BidEndTime} />
        )}
        <Button className="px-1 py-1 bg-[#ffffff75] text-[#464646] rounded-xl absolute right-6">
          {formatNumber(1000)} views
        </Button>
      </CardHeader>
      <CardContent className="flex flex-row justify-between">
        <div>
          <h1 className=" text-[16px] text-zinc-700 font-semibold">
            {props.nft.title.slice(0, 25)}
            {props.nft.title.length > 25 ?? "..."}
          </h1>
          <p className=" text-[10px] text-zinc-500">
            {props.nft.description.slice(0, 15)}...
          </p>
        </div>
        <div>
          <Button
            className="px-4 py-2 bg-[#ffffff75] text-[#888686] rounded-3xl"
            onClick={() => props.setActive(props.nft)}
          >
            {props.nft.PriceInEth} Eth
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
