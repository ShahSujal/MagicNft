"use client";
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
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { getPlatFormNftData } from "@/hooks/user/useDetails";
import { NftExtendedType } from "@/types/common";
import CardComponent from "../common/card-component";
import IdPage from "../market-page/id-page";
const Collections = () => {
  const [activeSelect, setActiveSelect] = useState<NftExtendedType | null>()
 
  const list = [
    {
      key: 1,
      name: "Trending",
    },
    {
      key: 2,
      name: "Popular",
    },
    {
      key: 3,
      name: "Recents",
    },
    {
      key: 4,
      name: "Fresh",
    },
  ];
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const {nftData} = getPlatFormNftData()
 
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
          <Button
            className=" default text-xs text-gray-500 bg-white"
            onClick={() => (address ? open({ view: "Networks" }) : open())}
          >
            {address
              ? ` ${address?.slice(0, 7)}....${address?.slice(-4)}`
              : "Connect Wallet"}
          </Button>
        </div>
      </div>

      {/* NFTs */}

      <h1 className="text-[34px] text-zinc-100 font-semibold mt-4 ml-4">
        Collections
      </h1>



      <div className="flex items-center justify-between p-4 ">
        <div className="flex space-x-2">
          {list.map((item) => (
            <Button
              key={item.key}
              className="px-4 py-2 hover:bg-[#ffffffab] transition text-slate-500 bg-[#ffffff15]  rounded-3xl"
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className="flex space-x-4">
          <Button className="px-4 py-2 hover:bg-[#ffffffab] transition text-slate-500 bg-[#ffffff15]  rounded-3xl">
            Sort by A-Z
          </Button>
          <Button className="px-4 py-2 bg-[#ffffff75] text-[#888686] rounded-3xl space-x-2">
            <PlusCircledIcon /> Create
          </Button>
        </div>
      </div>

      <div className=" w-full min-h-screen flex flex-row space-y-4 flex-wrap ">
        {nftData.map((item:NftExtendedType) => (
         <CardComponent nft={item} setActive={setActiveSelect}/>
        ))}
      </div>

      {
        activeSelect && (
          <IdPage nft={activeSelect} setClose={setActiveSelect}/>
        )
      }
    </main>
  );
};

export default Collections;
