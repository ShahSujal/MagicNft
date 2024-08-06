import { NextResponse, NextRequest } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";
import Joi from 'joi';

const prisma = new PrismaClient();

const schema = Joi.object({
  postId: Joi.string().required(),
});

export async function POST(req: NextRequest, res: NextResponse) {
  const apiKey = req.headers.get("apiKey");
  if (apiKey !== process.env.API_KEY!) {
    return NextResponse.json({ success:false, error: "Invalid API Key" });
  }
  const data = await req.json();

  // Validate the input data
  const { error } = schema.validate(data);

  if (error) {
    return NextResponse.json({ success:false,error: error.details[0].message });
  }
  
 try {
  const checkIsPostExist = await prisma.post.findFirst({
    where: {
      id: data.postId,
    },
    
   });
   if (!checkIsPostExist) {
     return NextResponse.json({success:false, error: "Post Not Found" });
   }
    return NextResponse.json({success:true, post:checkIsPostExist});
 } catch (error) {
  console.log("error",error);
  
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // Handle known Prisma errors
    return NextResponse.json({ success:false, error: error});
  }
  return NextResponse.json({ success:false, error: error});
 }
}