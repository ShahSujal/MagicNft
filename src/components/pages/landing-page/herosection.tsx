import Image from "next/image";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className=" w-full flex justify-center flex-col items-center min-h-screen relative ">
      <video className=' w-full h-[120vh] object-cover absolute left-0 top-0' src='/video/waves.mp4' autoPlay loop muted/>
      {/* <Image
        src="/video/cloth.gif"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="hero"
      /> */}
      <div className=" relative z-10 flex justify-center flex-col items-center w-full min-h-screen">
        <h1 className=" text-[126px] text-white uppercase font-fragment font-bold" style={{textShadow:"10px 10px 40px rgba(0,0,0,0.8)"}}>
          {" "}
          Magic Nft{" "}
        </h1>
        <button className=" bg-[#ffffff2b] backdrop-blur-xl px-10 py-3 rounded-full text-black font-bold uppercase">
          {" "}
          Explore{" "}
        </button>

      </div>

      <div className=" w-full min-h-screen bg-white ">

      </div>

   
    </div>
  );
};

export default HeroSection;
