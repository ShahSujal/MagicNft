import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  const apiKey = req.headers.get("apiKey");
  if (apiKey !== process.env.API_KEY!) {
    return NextResponse.json({ success:false, error: "Invalid API Key" });
  }
  const checkIsPostExist = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      createdAt: true,
      authorId: true,
      endDate: true,
      status: true,
      image: true,
      chainId:true,
      reward:true,
    },
    orderBy: {
      createdAt: "desc",
    },

  });
   if (!checkIsPostExist) {
     return NextResponse.json({ error: "Post Not Found" });
   }
    return NextResponse.json(checkIsPostExist);
}