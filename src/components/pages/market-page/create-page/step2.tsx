import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

export function Step2({
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
            <h1 className="text-3xl font-bold text-gray-100">Nft Details</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
          <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="AI NFT"
                required
              />
            </div>
          <div className="grid gap-2">
          <Label >description</Label>
          <Textarea />
            </div>
          <div className="grid gap-2">
          <Label >short description (optional)</Label>
          <Textarea />
            </div>
          
            <Button variant="outline" className="w-full" onClick={()=>{setStep(2)}}>
              Continue
            </Button>
            <Button type="submit" className="w-full">
              Back
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:flex relative  justify-center items-center">
        <h1 className="absolute  font-bold text-[96px] z-10">
         Ai NFT
        </h1>
        <Image
          src="/images/ai-tech.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale mix-blend-luminosity"
        />
      </div>
    </div>
  );
}
