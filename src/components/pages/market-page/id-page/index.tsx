import React from "react";
import { BookmarkFilledIcon, Cross2Icon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RecommendedNft } from "./recommended-nft";
import { Nfts } from "@prisma/client";
import { NftExtendedType } from "@/types/common";
import CountdownButton from "../../common/count-down";
type Props = {
  nft: NftExtendedType;
  setClose: React.Dispatch<React.SetStateAction<any>>;
};
const IdPage = (nft:Props) => {
  return (
    <div className=" fixed top-24 left-0 w-full h-[calc(100%-96px)] flex  bg-[#ffffff5c] backdrop-blur-lg z-30 px-44 overflow-y-scroll flex-col  rounded-t-[50px] ">      
      <div className=" fixed bottom-4 right-8 w-[60px] h-[60px] rounded-2xl bg-[#0000009d] backdrop-blur-lg z-30 flex justify-center items-center" onClick={()=>nft.setClose(null)}>
        <Cross2Icon className=" text-[40px] text-gray-200" />
      </div>
        <div className=" w-full h-36 flex flex-row my-10 items-center justify-between ">
         <div className=" flex flex-row justify-center items-center">
         <Avatar className={"w-[80px] h-[80px]"}>
            <AvatarImage src="https://images.unsplash.com/photo-1722755417806-10e4c449e01d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className=" text-3xl text-gray-900 ml-2 font-medium">{nft.nft.user.name}</h1>
            <h3 className=" text-sm text-gray-600 ml-2">
              {nft.nft.shortDescription}{" "}
            </h3>
          </div>
         </div>
         <div className=" flex justify-center items-center flex-row space-x-3">
         <Button className="px-2 py-2 bg-[#ffffff50] text-[#464646] rounded-xl">
            1.2k views
        </Button>
         <Button className="px-3 py-2 bg-[#ffffff50] text-[#7c7b7b] rounded-full">
         <HeartFilledIcon/>
        </Button>
         <Button className="px-3 py-2 bg-[#ffffff50] text-[#8e8c8c] rounded-full">
         <BookmarkFilledIcon/>
        </Button>
         </div>

        </div>
        <Image src={nft.nft.image} alt="" width={1000} height={1000} className=" w-full h-auto object-content rounded-2xl" />      
         <h1 className=" text-[75px] text-black font-semibold text-center mt-16">
         {nft.nft.title}
         </h1>
         <div className=" w-full h-40 relative">
         {nft.nft.isBid && nft.nft.BidEndTime && (
          <CountdownButton endTiming={nft.nft.BidEndTime} width="600px" />
        )}
         </div>
         <h1 className=" text-[15px] text-gray-600 text-center font-semibold">
        {nft.nft.description}
         </h1>

        
        
        <div className=" w-full h-screen">
 <RecommendedNft/>
        </div>


        <div className=" w-full h-screen">


        </div>




    </div>
  );
};

export default IdPage;
