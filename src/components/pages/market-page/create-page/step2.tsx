import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { NftType } from "@prisma/client";
import { toast } from "@/components/ui/use-toast";
import { TLoadDataType } from "@/types/common";

interface Step1Props {
  setLoadData: React.Dispatch<React.SetStateAction<TLoadDataType>>;
  setImage: React.Dispatch<React.SetStateAction<string[]>>;
  loadData: TLoadDataType;
}
interface ImageResponse {
  success: boolean;
  prompt: string;
  image: string[];
}
export function Step2({ setLoadData, loadData,setImage }: Step1Props) {
 const [loading, setLoading] = useState(false);
  const generatedImage = async () => {
    setLoading(true);
    let bodyContent = JSON.stringify({
      prompt: loadData.description,
    });

    let reqOptions = {
      url: "http://localhost:3000/api/image/imageAndPrompt",
      method: "POST",
      data: bodyContent,
    };
    let response = await axios.post(reqOptions.url,{
      prompt: loadData.description,
    });
    const data = await response.data;
    console.log(data);
    
    if (data.success === false) {
      setLoading(false);
      toast({
        title: "Error in image generation",
        description: (
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur possimus exercitationem aspernatur</h1>
        ),
      });
    }
    setImage(data.image);
   await setLoadData({ ...loadData, images: data.image, step: 3  });
    setLoading(false);  
  };


  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-gray-100">
              {loadData.type} details
            </h1>
            <p className="text-balance text-muted-foreground">
              Fill in the details of your NFT
            </p>
          </div>
          {loadData.type === NftType.Platform_generated ? (
            <div className="grid gap-4 text-black">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="AI NFT"
                  required
                  onChange={(e) => {
                    setLoadData({ ...loadData, title: e.target.value });
                  }}
                />
              </div>
              <div className="grid gap-2">
                <Label>description</Label>
                <Textarea
                  onChange={(e) => {
                    setLoadData({ ...loadData, description: e.target.value });
                  }}
                  placeholder="Description of nft"
                />
              </div>
              <div className="grid gap-2">
                <Label>short description (optional)</Label>
                <Textarea
                  onChange={(e) => {
                    setLoadData({
                      ...loadData,
                      shortDescription: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4"></div>
              <Button
              variant={"default"}
                className="w-full"
                onClick={() => {
                  setLoadData({ ...loadData, step: 2 });
                }}
              >
                Continue
              </Button>
              <Button
                type="submit"
                variant={"secondary"}
                className="w-full"
                onClick={() => {
                  setLoadData({ ...loadData, step: 0 });
                }}
              >
                Back
              </Button>
            </div>
          ) : loadData.type === NftType.Ai_generated ? (
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Generate title </Label>
                <Input
                  id="title"
                  type="text"

                  placeholder="Sunny day"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Prompt</Label>
                <Textarea 
                  placeholder="Prompt for AI"
                onChange={(e) => {
                    setLoadData({ ...loadData, description: e.target.value });
                  }}
                />
              </div>
              <Button
                variant="default"
                className="w-full"
                onClick={() => {
                  generatedImage()
                }}
              >
               {loading ? "Loading..." : "Generate Image"}
              </Button>
              <Button
                type="submit"
                className="w-full"
                variant={"secondary"}
                onClick={() => {
                  setLoadData({ ...loadData, step: 0 });
                }}
              >
                Back
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="hidden bg-muted lg:flex relative  justify-center items-center">
        <h1 className="absolute  font-bold text-[96px] z-10">Ai NFT</h1>
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
{
  /* <div className="grid gap-2">
              <Label >Order Type</Label>
              <Select>
                  <SelectTrigger className="w-[180px] bg-[#ffffff56]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price in Eth</Label>
              <Input id="price"   className="bg-[#ffffff62]" type="number" placeholder="Price" required />
            </div> */
}
