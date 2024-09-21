"use client";
import { useExpandState } from "@/lib/zustand-states/states";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { SIDE_BAR_MENU } from "@/lib/constants/menu";
import MenuItem from "./sidebar/menu-item";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";
// import { userDetails } from "@/actions/auth";
import { StarsIcon } from "lucide-react";

const SideBar = () => {
  const expand = useExpandState((state) => state.expand);
  const updateExpandState = useExpandState((state) => state.updateExpandState);
  const { theme, setTheme } = useTheme();
 
  return (
    <div className="w-[300px] h-screen flex items-center justify-between flex-col bg-[#f3f3f569] dark:bg-neutral-950  ">
      <div className="w-full flex items-center flex-col">
      <div className=" flex items-center w-full p-2  flex-row">
      {/* <Avatar
          className={"w-[25px] h-[25px]"
          }
        >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
        <StarsIcon width={20} height={20}/>
        <h1 className=" text-lg text-gray-800 font-semibold font-gothic2 ml-2">Magic Nft</h1>

      </div>
        <div className="flex flex-col w-full p-4">
          <p className="text-xs text-gray-500 mb-3">MENU</p>
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem size="max" {...menu} key={key} current={"/dahsboard"} />
          ))}
        </div>
      </div>

      {/* Light dar mode */}
      {/* <div className=" w-full flex flex-row pl-4 my-4">
        <div className="w-full flex flex-row pl-4 my-4">
          <Switch
            onCheckedChange={(value: boolean) => {
                setTheme(value ? "dark" : "light")
              }}
          /> 
           <p className="text-xs text-gray-500 ml-2">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default SideBar;
