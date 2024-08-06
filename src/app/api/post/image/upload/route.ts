import { NextResponse, NextRequest } from "next/server";
import Joi from "joi";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const schema = Joi.object({
  apiKey: Joi.string().required(),
  image: Joi.string().required(),
});

import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const uuid = uuidv4();
  // Validate the input data
  const { error } = schema.validate(data);

  if (data.apiKey !== process.env.API_KEY!) {
    return NextResponse.json({success:false, error: "Malicious Activity Not Allowed" });
  }
  if (error) {
    return NextResponse.json({success:false, error: error.details[0].message });
  }

if (!process.env.IMAGE_API_URL) {
  throw new Error('IMAGE_API_URL is not defined');
}

const getImage = await axios.get(
  `${process.env.IMAGE_API_URL}${data.image}`,
  {
    responseType: "arraybuffer", // Set the response type to arraybuffer
  }
);
  if (await getImage.data) {
    const imageData = new Uint8Array(getImage.data);

    // Create a Blob from the binary data
    const imageBlob = new Blob([imageData]);

    // Create a File object from the Blob
    const imageFile = new File([imageBlob], "image.jpg", {
      type: "image/jpeg",
    });
    

    // Upload the File object to Supabase storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(process.env.BUCKET_NAME!)
      .upload(uuid, imageFile, {
        cacheControl: "3600",
        upsert: false,
      });

      
    if (uploadError) {
      return NextResponse.json({success:false, error: "aws error" });
    } else {
      return NextResponse.json({ success: true , image: uuid });
    }
  }
}
