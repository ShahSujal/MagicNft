// import SideBar from "@/components/";
import { userDetails } from "@/actions/auth";
import SideBar from "@/components/global/SideBar";
import IdPage from "@/components/pages/market-page/id-page";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = async (props: Props) => {
  // const user = await userDetails()
  // console.log(user);
  
  return (
    <div className="flex h-screen w-full bg-[#c9d2e7]">
    <SideBar/>
    <div className="w-full min-h-screen overflow-y-auto flex flex-col ">
      {props.children}
    </div>
  </div>
  )
};

export default layout;
/*
  <main className=" bg-[#c9d2e7] h-screen w-full relative ">
    <div className=" absolute left-1/3 bg-gradient-to-tr from-[#f6d6f7] to-[#ffdce0] blur-2xl w-24 h-44"></div>
    <div className=" absolute left-2/3 top-1/2 bg-gradient-to-tr from-[#faeefb] to-[#f7e9ea] blur-[80px] w-44 h-44"></div>
    <SideBar/>
    <div className="w-full min-h-screen overflow-y-auto flex flex-col pl-20 md:pl-4">
      {props.children}
    </div>
  </main>
*/