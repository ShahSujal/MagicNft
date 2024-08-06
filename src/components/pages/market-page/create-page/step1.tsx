import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Step1({
    setStep
}: any) {
  const nftData = [
    {
      src: "/images/ai-tech.jpg",
      title: "AI NFT",
      desc: "Create NFTs for brand promotion and reward users who follow your campaign.",
    },
    {
      src: "/images/bidding.jpg",
      title: "Bidding NFT",
      desc: "Engage users with bidding NFTs and reward them for participating in your campaign.",
    },
    {
      src: "/images/platform-nft.jpg",
      title: "Platform NFT",
      desc: "Leverage platform-generated NFTs for brand promotion and user rewards.",
    },
  ];
  const [Selected, setSelected] = useState(0);
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-gray-100">Create Nft's</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            {nftData.map((nft, index) => (
              <div
                key={index}
                className={cn(
                  "w-full h-28 flex justify-center items-center relative flex-col border-2 border-[#ffffff53] rounded-2xl cursor-pointer mix-blend-luminosity transition hover:mix-blend-normal",
                  Selected === index && "mix-blend-normal"
                )}
                onClick={() => setSelected(index)}
              >
                <Image
                  src={nft.src}
                  alt={nft.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition rounded-2xl absolute left-0 top-0 opacity-50"
                />
                <h1 className="text-[40px] font-semibold z-10 text-gray-600">
                  {nft.title}
                </h1>
                <h3 className="text-[10px] z-10 text-gray-900 text-center">
                  {nft.desc}
                </h3>
              </div>
            ))}
            <Button variant="outline" className="w-full" onClick={()=>{setStep(1)}}>
              Continue
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/images/illus.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale mix-blend-luminosity"
        />
      </div>
    </div>
  );
}
