import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { NftType } from "@prisma/client";
import { createPlatformNft } from "@/lib/contract/nft/create";
import { TLoadDataType } from "@/types/common";
import { useAccount } from "wagmi";
const FormSchema = z.object({
  file: z.instanceof(File).refine((file) => file.type === "image/jpg", {
    message: "Only PDF files are allowed.",
  }),
});
interface Step1Props {
  setLoadData: React.Dispatch<React.SetStateAction<TLoadDataType>>;
  loadData: TLoadDataType;
  images: string[];
}
const Step3 = ({ setLoadData, loadData, images }: Step1Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);

  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  // });
  const { address } = useAccount();

  const onSubmit = async () => {
    if (!imageFile || !imageUrl) {
      return;
    }
    if (!address) {
      return;
    }
    const createNft = await createPlatformNft({
      title: loadData.title,
      description: loadData.description,
      imageFile: imageFile,
      image: imageUrl,
      PriceInEth: loadData.PriceInEth,
      orderType: loadData.orderType,
      category: loadData.category,
      isBid: loadData.isBid,
      BidEndTime: loadData.BidEndTime,
      rewardEndDate: loadData.rewardEndDate,
      rewardPoints: loadData.rewardPoints,
      images: images,
      shortDescription: loadData.shortDescription,
      step: 3,
      type: loadData.type,
      address: address as string,
    });

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          {/* <code className="text-white">{JSON.stringify(data, null, 2)}</code> */}
        </pre>
      ),
    });
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };
  const handleUpload = async () => {
    // const key = await getKey();
    // console.log(key);
  };
  return (
    <div className="w-full h-screen ">
      {loadData.type === NftType.Platform_generated ? (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold text-gray-100">
                  Nft Details
                </h1>
                <p className="text-balance text-muted-foreground">
                  Enter your email below to login to your account
                </p>
              </div>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100  "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              <Button type="submit" variant="outline" className="w-full" onClick={()=>onSubmit()}>
                Submit
              </Button>
              <Button
                className="w-full"
                onClick={() => {
                  setLoadData({ ...loadData, step: 1 });
                }}
              >
                Back
              </Button>
            </div>
          </div>
          <div className="hidden bg-muted lg:flex relative  justify-center items-center">
            <Image
              src={imageUrl ? imageUrl : "/images/ai-tech.jpg"}
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover "
            />
          </div>
        </div>
      ) : (
        <div className=" flex justify-evenly w-full h-screen flex-col items-center  ">
          <div className="flex flex-row w-full  justify-evenly items-center  ">
            {loadData.images.map((item: string, index: number) => {
              return (
                <div
                  className=" w-[350px] h-[350px] bg-[#cdcccc29] z-10 "
                  key={index}
                >
                  <Image
                    src={item}
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover rounded-xl  "
                  />
                </div>
              );
            })}
            {/* {images.map((item:string, index) => {
            console.log(item)
            return <div
                className=" w-[350px] h-[350px] bg-[#cdcccc29] z-10 "
                key={index}
              >
                <Image
                  src={item}
                  alt="Image"
                  width="1920"
                  height="1080"
                  className="h-full w-full object-cover rounded-xl  "
                />
              </div>
})} */}
          </div>
          <div className=" flex flex-row justify-evenly items-center w-[650px]">
            <Button
              className="w-2/5"
              onClick={() => {
                setLoadData({ ...loadData, step: 1 });
              }}
            >
              Back
            </Button>
            <Button type="submit" variant="outline" className="w-2/5 my-4">
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step3;
