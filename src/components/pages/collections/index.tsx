import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

import {EyeOpenIcon, PlusCircledIcon} from "@radix-ui/react-icons"
const Collections = () => {

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
    ]


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
            className=" default
 text-xs text-gray-500 bg-white"
          >
            Connect Wallet
          </Button>
        </div>
      </div>

      {/* NFTs */}

      <h1 className="text-[34px] text-zinc-100 font-semibold mt-4 ml-4">Collections</h1>


     {/* 
     Options 
     recent tranding popular recents and in side sort by and create button
     */}


<div className="flex items-center justify-between p-4 ">
      <div className="flex space-x-2">
       {
        list.map((item) => (
            <Button
            key={item.key}
            className="px-4 py-2 hover:bg-[#ffffffab] transition text-slate-500 bg-[#ffffff15]  rounded-3xl"
            >
                {item.name}
            </Button>
       ))}
      </div>
      <div className="flex space-x-4">
      <Button
            className="px-4 py-2 hover:bg-[#ffffffab] transition text-slate-500 bg-[#ffffff15]  rounded-3xl"
            >
              Sort by A-Z
            </Button>
        <Button className="px-4 py-2 bg-[#ffffff75] text-[#888686] rounded-3xl space-x-2"><PlusCircledIcon/> Create</Button>
      </div>
    </div>

    <div className=" w-full min-h-screen flex flex-row flex-wrap ">
            {[1,2,3,4,5].map((item) => (
                <Card key={item} className=" w-[300px] h-[350px] bg-[#ffffff31] mx-auto  ">
                   
                 <CardHeader className="relative">
                 
                    <Image width={500} height={500} className=" w-full h-[250px] object-cover rounded-lg" src="https://images.unsplash.com/photo-1646038572815-43fe759e459b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="NFT" />
                    <Button className="px-1 py-1 bg-[#ffffff75] text-[#464646] rounded-full absolute right-6">1.5k</Button>
                 </CardHeader>
                 <CardContent className="flex flex-row justify-between">
                       <div>
                       <h1 className=" text-lg text-zinc-700 font-semibold">NFT Name</h1>
                       <p className=" text-xs text-zinc-500">Description</p>
                       </div>
                      
                      <div>
                      <Button className="px-4 py-2 bg-[#ffffff75] text-[#888686] rounded-3xl">0.0005 Eth</Button>
                      
                      </div>
                 </CardContent>
                </Card>
            ))
            
            }
    </div>


    </main>
  );
};

export default Collections;
