import React from "react";
import Spline from '@splinetool/react-spline/next';
/*

export default function Home() {
  return (
    <main>
    
    </main>
  );
}

*/
const HomeScreen = () => {
  return (
    <main className=" min-h-screen w-full relative ">
      <div className=" absolute top-0 left-0 w-screen h-screen bg-[#000000] ">
      <video
          className="w-full h-full mix-blend-luminosity object-cover"
          src="/images/nft.mp4"
          autoPlay
          loop
          muted
          style={{
            userSelect: "none",
            msUserSelect: "none",
          }}
        />
      </div>
      <div className=" absolute left-1/3 bg-gradient-to-tr from-[#f6d6f7] to-[#ffdce0] blur-2xl w-24 h-44"></div>
      <div className=" absolute left-2/3 top-1/2 bg-gradient-to-tr from-[#faeefb] to-[#f7e9ea] blur-[80px] w-44 h-44"></div>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col z-20 justify-center items-center">
          <h1 className="text-[95px] text-[#ffffff]  font-gothic2">NFT MarketPlace</h1>
        </div>
      </div>

<div className=" w-full min-h-screen bg-[#ebe9eb] flex flex-col">

      <div className=" w-full h-[350px] bg-[#e3dce0] flex flex-col my-10">

      </div>
      
</div>


  

    </main>
  );
};

export default HomeScreen;
