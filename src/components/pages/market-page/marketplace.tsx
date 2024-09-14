"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";

import { EyeOpenIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import test from "node:test";
import CardComponent from "../common/card-component";
import Link from "next/link";
// import { useWeb3Modal } from "@web3modal/wagmi/react";
// import { useAccount } from "wagmi";
import { createBidNft, createPlatformNft, getPlatFormNftData, registerUser } from "@/hooks/user/useDetails";
import { Nfts } from "@prisma/client";
import IdPage from "./id-page";
import { NftExtendedType } from "@/types/common";
const MarketPlace = () => {


  /*
    creating dummy data to test the carousel
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
    */

  const dummyData = [
    {
      name: "Trending",
      description:
        "This NFT is currently trending due to its unique design and high demand. It represents the cutting-edge of digital art and is a must-have for any serious collector.",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      symbol: "ETH",
      views: 1000,
      owner: "0x1234567890",
      id: "0x1234567890",
      category: "Trending",
      likes: 100,
      endTimer: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
    },
    {
      name: "Popular",
      description:
        "This NFT has gained immense popularity due to its vibrant colors and intricate details. It is a favorite among collectors and continues to attract attention from new buyers.",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      symbol: "ETH",
      views: 2000,
      owner: "0x1234567890",
      id: "0x1234567890",
      category: "Popular",
      likes: 200,
      endTimer: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    },
    {
      name: "Recent",
      description:
        "This recently minted NFT showcases the latest trends in digital art. Its fresh and innovative design makes it a standout piece in any collection.",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      symbol: "ETH",
      views: 3000,
      owner: "0x1234567890",
      id: "0x1234567890",
      category: "Recent",
      likes: 300,
    },
    {
      name: "Cartoon",
      description:
        "This recently minted NFT showcases the latest trends in digital art. Its fresh and innovative design makes it a standout piece in any collection.",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      symbol: "ETH",
      views: 3000,
      owner: "0x1234567890",
      id: "0x1234567890",
      category: "Cartoon",
      likes: 300,
      endTimer: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000),
    },
  ];

  // const { open } = useWeb3Modal();
  // const { address } = useAccount();


  const cartoon = ()=>{

  }
 const {nftData} = getPlatFormNftData()
 
 const [activeSelect, setActiveSelect] = useState<NftExtendedType | null>()
 
  return (
    <main className=" bg-[#c9d2e7] dark:bg-stone-900 h-screen w-full relative ">
      <div className=" absolute left-1/3 bg-gradient-to-tr from-[#f6d6f7] dark:from-[black] to-[#ffdce0] dark:to-[#175e71] blur-2xl w-24 h-44"></div>
      <div className=" absolute left-2/3 top-1/2 bg-gradient-to-tr from-[#faeefb] to-[#f7e9ea] blur-[80px] w-44 h-44"></div>
      {/* search bar and wallet connection in a row */}
      <div className="w-full flex items-center justify-between px-4 py-2">
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Search for NFTs"
            className="w-full p-2 rounded-xl bg-[#f3f3f569] dark:bg-neutral-950"
          />
        </div>
        <div className="w-1/2 flex justify-end gap-4">
          {/* <Button
            className=" default text-xs text-gray-500 bg-white"
            onClick={() =>  open()}
          >
            {address ? address.slice(0, 8) : "Connect Wallet"}
          </Button> */}
        </div>
      </div>

      <div className=" w-11/12 mt-10 mx-auto flex bg-[#ffffff41] flex-row h-72 rounded-3xl relative">
        {/* <Image
          src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className=" w-full  h-full rounded-xl absolute opacity-70 top-0 left-0"
          width={1887}
          height={1059}
          objectFit="cover"
          alt="hero"
        /> */}

        {/* <video className="w-1/2 h-full rounded-3xl" src="/images/rabbit.mp4" autoPlay loop muted/> */}
        <video
          className="w-1/2 h-full rounded-3xl mix-blend-luminosity"
          src="/images/rabbit.mp4"
          autoPlay
          loop
          muted
        />
        {/* <Image
        src="/images/rabbit-unscreen.gif"
        className="w-96 h-full rounded-3xl"
        width={1887}
        height={1059}
        objectFit="cover"
        alt="hero"
      /> */}
        <div className=" w-1/2 h-full flex justify-center items-center flex-col z-10">
          <h1 className=" text-[34px] font-medium text-gray-50 text-center  ">
            Discover Collect and Sell
            <br /> various extraordinary NFT's
          </h1>
          <div className=" space-x-4">
            <Link href="/create">
              <Button
                variant={"default"}
                className="px-1 py-1 bg-[#ffffff75] text-[#464646] rounded-3xl w-36 mt-4"
              >
                Create{" "}
              </Button>
            </Link>
            <Link href="/collections">
              <Button className="px-1 py-1 bg-[#ffffff33] text-[#000000] rounded-3xl w-36 mt-4">
                Discover{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <h1 className="text-[20px] text-zinc-700 font-semibold mt-4 ml-4">
        Faster to get a bid{" "}
      </h1>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full relative px-2"
      >
        <CarouselContent className=" space-x-8">
          {nftData.map((item:NftExtendedType) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4 ">
              <CardComponent nft={item} setActive={setActiveSelect}  />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" absolute left-3 top-1/2" />
        <CarouselNext className=" absolute right-3 top-1/2" />
      </Carousel>

      <div className=" my-10">
      <Button
          variant={"default"}
          className="px-1 py-1 bg-[#ffffff75] text-[#464646] rounded-3xl w-36 mt-4"
          onClick={()=>registerUser()}
       >
          Create{" "}
        </Button>
      <Button
          variant={"default"}
          className="px-1 py-1 bg-[#ffffff75] text-[#464646] rounded-3xl w-36 mt-4"
          onClick={()=>createPlatformNft()}
       >
          platform generate{" "}
        </Button>
      <Button
          variant={"default"}
          className="px-1 py-1 bg-[#ffffff75] text-[#464646] rounded-3xl w-36 mt-4"
          onClick={()=>createBidNft()}
       >
          create BidNft{" "}
        </Button>
      <Button
          variant={"default"}
          className="px-1 py-1 bg-[#ffffff75] text-[#464646] rounded-3xl w-36 mt-4"
          onClick={()=>registerUser()}
       >
          Create{" "}
        </Button>
      </div>

      <h1 className="text-[20px] text-zinc-700 font-semibold mt-4 ml-4">
        Recent{" "}
       
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full relative px-2"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
              <div className="p-1">
                <Card className="bg-[#ffffff4d]">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" absolute left-3 top-1/2" />
        <CarouselNext className=" absolute right-3 top-1/2" />
      </Carousel>


      {
        activeSelect && (
          <IdPage nft={activeSelect} setClose={setActiveSelect}/>
        )
      }
    </main>
  );
};

export default MarketPlace;
