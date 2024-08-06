import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
const Step3 = ({ setStep }: any) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setImageFile(file);
        setImageUrl(URL.createObjectURL(file));
      }
    };
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
            <Label>Upload NFT</Label>

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
                <input id="dropzone-file" type="file" className="hidden"  onChange={handleFileChange} />
              </label>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setStep(2);
              }}
            >
              Submit
            </Button>
            <Button
              type="submit"
              className="w-full"
              onClick={() => {
                setStep(1);
              }}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:flex relative  justify-center items-center">
        <Image
          src={imageUrl? imageUrl : "/images/ai-tech.jpg"}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover "
        />
      </div>
    </div>
  );
};

export default Step3;
