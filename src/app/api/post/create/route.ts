import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import Joi from "joi";
import axios from "axios";

const prisma = new PrismaClient();

const schema = Joi.object({
  title: Joi.string().required(),
  story: Joi.string().required(),
  status: Joi.string().default("active"),
  endDate: Joi.date().required(),
  authorId: Joi.string().required(),
  reward: Joi.number().required(),
  chainId: Joi.string().required(),
});

export async function POST(req: NextRequest, res: NextResponse) {
  const apiKey = req.headers.get("apiKey");
  if (apiKey !== process.env.API_KEY!) {
    return NextResponse.json({ success:false, error: "Invalid API Key" });
  }
  const data = await req.json();
  const baseUrl = process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_URL : process.env.DEV_URL;

  // Validate the input data
  const { error } = schema.validate(data);

  if (error) {
    return NextResponse.json({
      success: false,
      error: error.details[0].message,
    });
  }
  
  try {
    let imageGet = await axios.post(
      `${baseUrl}/api/post/image/imageAndPrompt`,
      {
        apiKey: apiKey,
        story: data.story,
      }
    );
  
    if (!imageGet.data.image) {
      return NextResponse.json({ success: false, error: "No Image Found" });
    }
    
    let uploadImage = await axios.post(
      `${baseUrl}/api/post/image/upload`,
      {
        apiKey: apiKey,
        image: imageGet.data.image,
      }
    );
    

    if (uploadImage.data.image) {
      const create = await prisma.post.create({
        data: {
          title: data.title,
          story: data.story,
          reward: data.reward,
          chainId: data.chainId,
          endDate: data.endDate,
          image: uploadImage.data.image,
          authorId: data.authorId,
        },
      });
      return NextResponse.json({ success: true, create });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
