import React from "react";

const HomeScreen = () => {
  return (
    <main className=" bg-[#c9d2e7] min-h-screen w-full relative ">
      <div className=" absolute left-1/3 bg-gradient-to-tr from-[#f6d6f7] to-[#ffdce0] blur-2xl w-24 h-44"></div>
      <div className=" absolute left-2/3 top-1/2 bg-gradient-to-tr from-[#faeefb] to-[#f7e9ea] blur-[80px] w-44 h-44"></div>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[95px] text-[#ffffff]">NFT MarketPlace</h1>
          <p className="text-[18px] text-[#4c4c4c] w-2/3 text-center">
            The best place to buy and sell NFTs Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur qui, suscipit doloremque magnam 
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
