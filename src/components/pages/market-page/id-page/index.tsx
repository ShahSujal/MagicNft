import React from "react";
import { BookmarkFilledIcon, Cross2Icon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RecommendedNft } from "./recommended-nft";
const IdPage = () => {
  return (
    <div className=" fixed top-24 left-0 w-full h-[calc(100%-96px)] flex  bg-[#ffffff5c] backdrop-blur-lg z-30 px-44 overflow-y-scroll flex-col  rounded-t-[50px] ">
    

      {/* <div className=" w-10/12 min-h-screen flex flex-col mt-[120px] items-center justify-center relative"> */}
      
      <div className=" fixed bottom-4 right-8 w-[60px] h-[60px] rounded-2xl bg-[#0000009d] backdrop-blur-lg z-30 flex justify-center items-center">
        <Cross2Icon className=" text-[40px] text-gray-200" />
      </div>
        <div className=" w-full h-36 flex flex-row my-10 items-center justify-between ">
         <div className=" flex flex-row justify-center items-center">
         <Avatar className={"w-[80px] h-[80px]"}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className=" text-3xl text-gray-900 ml-2 font-medium">Hello World</h1>
            <h3 className=" text-sm text-gray-600 ml-2">
              Lorem ipsum dolor sit amet consectetur{" "}
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
        <Image src={'/images/cat.png'} alt="" width={1000} height={1000} className=" w-full h-[500px] object-cover rounded-2xl" />
         
         <h1 className=" text-[75px] text-black font-semibold text-center mt-16">
          AWESOME
         </h1>
         <h1 className=" text-[15px] text-gray-600 text-center font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur dolor provident voluptatum, ipsum, at corporis distinctio consectetur incidunt reprehenderit numquam? Doloribus, modi ullam!
         </h1>
        
        <div className=" w-full h-screen">
 <RecommendedNft/>
        </div>


        <div className=" w-full h-screen">
 {/* <RecommendedNft/> */}


        </div>




    </div>
  );
};

export default IdPage;
