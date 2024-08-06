import React from "react";
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
type Props = {
    name: string;
    description: string;
    price: number;
    image: string;
    symbol: string;
    views: number;
    owner: string;
    id: string;
    category: string;
    likes: number;
    endTimer?: Date;
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
          src={props.image}
          alt="NFT"
        />
      
        {
        props.endTimer && (
          <CountdownButton endTiming={props.endTimer} />
        )
        }
        <Button className="px-1 py-1 bg-[#ffffff75] text-[#464646] rounded-xl absolute right-6">
            {formatNumber(props.views)} views
        </Button>
      </CardHeader>
      <CardContent className="flex flex-row justify-between">
        <div>
          <h1 className=" text-lg text-zinc-700 font-semibold">{props.name}</h1>
          <p className=" text-xs text-zinc-500">{props.description.slice(0,15)}...</p>
        </div>
        <div>
          <Button className="px-4 py-2 bg-[#ffffff75] text-[#888686] rounded-3xl">
            {props.price} {props.symbol}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
