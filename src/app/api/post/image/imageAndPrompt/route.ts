import { NextResponse, NextRequest } from "next/server";
import Joi from "joi";
import axios from "axios";

const schema = Joi.object({
  apiKey: Joi.string().required(),
  story: Joi.string()
});

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const { error } = schema.validate(data);

  if (data.apiKey !== process.env.API_KEY!) {
    return NextResponse.json({success:false, error: "Malicious Activity Not Allowed" });
  }
  if (error) {
    return NextResponse.json({success:false, error: error.details[0].message });
  }
const generateUuid = await axios.post(`${process.env.UUID_GENERATE_URL!}`,{
  prompt: data.story
})
let generateImage;
await new Promise(resolve => setTimeout(resolve, 15000)); // Wait for 15 seconds bcz of api constraints
generateImage = await axios.get(`${process.env.IMAGE_GENERATE_URL!}/${generateUuid.data.uuid}`);

if (generateImage && generateUuid) {
  return NextResponse.json({
    success: true,
    image: generateImage?.data?.images[0] || null,
  })    

} else {
  return NextResponse.json({success:false, error: "No Image Found"
  });
}
}