import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NftType } from "@prisma/client";
import { TLoadDataType } from "@/types/common";

interface Step1Props {
  setLoadData: React.Dispatch<React.SetStateAction<TLoadDataType>>;
  loadData: TLoadDataType;
}
export function Step1({ setLoadData, loadData }: Step1Props) {
  const nftData = [
    {
      src: "/images/ai-tech.jpg",
      title: NftType.Ai_generated,
      desc: "AI-generated NFT",
    },
    {
      src: "/images/platform-nft.jpg",
      title: NftType.Platform_generated,
      desc: "Platform Custom NFT",
    },
  ];

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold font-paps text-gray-100">Create Your NFT</h1>
            <p className="text-lg font-fragment text-muted-foreground">
              Select the type of NFT you want to create for your marketplace
            </p>
          </div>
          <div className="grid gap-4">
            {nftData.map((nft, index) => (
              <div
                key={index}
                className={cn(
                  "w-full h-36 flex justify-center items-center relative flex-col border-2 border-[#ffffff53] rounded-2xl cursor-pointer mix-blend-luminosity transition hover:mix-blend-normal",
                  loadData.type === nft.title && "mix-blend-normal"
                )}
                onClick={() => setLoadData({ ...loadData, type: nft.title })}
              >
                <Image
                  src={nft.src}
                  alt={nft.title}
                  width={500}
                  height={500}
                  className={cn(
                    "w-full h-full object-cover transition rounded-2xl absolute left-0 top-0 blur-xs grayscale opacity-20",
                    loadData.type === nft.title && "opacity-70"
                  )}
                />
                <h1 className="text-[32px] font-bold font-fragment z-10 text-white" style={{ textShadow: "8px 8px 16px rgba(255,255,255,1.0)" }}>
                  {nft.desc}
                </h1>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setLoadData({ ...loadData, step: 1 })}
            >
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