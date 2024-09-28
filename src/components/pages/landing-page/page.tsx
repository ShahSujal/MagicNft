'use client';
import { useEffect } from 'react';
import Lenis from 'lenis'
import Intro from './Intro';
import Description from './description';
import Image from 'next/image';
import { BiohazardIcon, BirdIcon, Coins, CrownIcon, PlusCircleIcon, ShoppingBasket } from 'lucide-react';

export default function Landing() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time:number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Description />
      <div className='h-screen w-full justify-center items-center flex flex-row'>
        <Image src='/images/peakock.png' width={1000} height={1000} className=' object-contain w-[550px] h-[550px]' quality={100} alt='hero' />

        <h2 className=' text-[50px] text-center font-paps font-medium '>Create premium nft&apos;s<br/> what you love 🐥</h2>
      </div>
      <div className='h-[110vh] w-full justify-center items-center relative flex flex-row'>
       <div className=' absolute top-0 left-0 h-screen w-full'>
       <video src='/video/ai.mp4'  className=' object-cover mix-blend-darken relative  w-full h-full' muted autoPlay loop />
       <div style={{background:"radial-gradient(transparent,rgba(255,255,255,0.8),white)"}} className=' w-full h-screen absolute top-0 left-0'>
       </div>
       </div>
       <div className=' w-full min-h-screen relative z-40 flex flex-row justify-center '>
          <div className=' flex flex-col mt-44  justify-center items-center w-[350px] h-screen'>
             <div className=' w-[300px] z-20 h-[300px] my-2 border-2 rounded-2xl backdrop-blur-sm bg-gradient-to-tr from-[#00000016] to-[#ffffff55] flex flex-col justify-center items-center'>
            <BirdIcon  width={30} height={30} color='#333' />
             <h1 className=' text-[45px] font-paps font-medium text-zinc-900'>Auction</h1>
             <p className=' text-[16px] font-paps text-center font-extralight text-zinc-800'>Make your favouirte nft auction and earn highest amount</p>
             </div>
             <div className=' w-[300px] z-20 h-[300px] my-2 border-2 rounded-2xl backdrop-blur-sm bg-gradient-to-tr from-[#0000001d] to-[#ffffff55] flex flex-col justify-center items-center'>
             <CrownIcon width={30} height={30} color='#333' />
             <h1 className=' text-[45px] font-paps font-medium text-zinc-900'>Create</h1>
             <p className=' text-[16px] font-paps text-center font-extralight text-zinc-800'>Create Amazing Ai generated Nft</p>
             </div>
          </div>
          <div className=' flex flex-col  justify-center items-center w-[350px] h-screen'>
             <div className=' w-[300px] z-20 h-[300px] my-2 border-2 rounded-2xl backdrop-blur-sm bg-gradient-to-tr from-[#00000016] to-[#ffffff55] flex flex-col justify-center items-center'>
             <Coins  width={30} height={30} color='#333'  />
             <h1 className=' text-[45px] font-paps font-medium text-zinc-900'>Sell</h1>
             <p className=' text-[16px] font-paps text-center font-extralight text-zinc-800'> Sell awesome nft with amount you want  </p>
             </div>
             <div className=' w-[300px] z-20 h-[300px] my-2 border-2 rounded-2xl backdrop-blur-sm bg-gradient-to-tr from-[#0000001d] to-[#ffffff55] flex flex-col justify-center items-center'>
                <ShoppingBasket width={30} height={30} color='#333'  />
             <h1 className=' text-[45px] font-paps font-medium text-zinc-900'>Buy</h1>
             <p className=' text-[16px] font-paps text-center font-extralight text-zinc-800'>Buy amazing ai or user generated nft</p>
             </div>
          </div>
       </div>

      </div>


      <div className=' flex justify-center items-center flex-col w-full min-h-[110vh]'>
         

   <h1 className=' text-[100px] text-center text-zinc-800 font-medium font-paps'>
           Trade with us and get the best experience of trading 
   </h1>

      </div>
      <div className='h-screen w-full justify-end relative items-end flex flex-row'>
        <Image src='/images/download.jpg' width={1000} height={1000} className=' object-cover w-full absolute h-[550px]' quality={100} alt='hero' />
         <div className=' text-[120px] text-white z-10 font-fragment font-bold' style={{textShadow:"10px 10px 30px rgba(0,0,0,0.8)"}}>
          Start Trading
         </div>
      </div>
    </main>
  );
}