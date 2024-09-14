import { PinataSDK } from 'pinata';
import { NextRequest, NextResponse } from 'next/server';

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT!,
  pinataGateway: process.env.PINATA_GATEWAY!,
});

export async function POST(req: NextRequest, res: NextResponse) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }
  const data = await pinata.upload.file(file);
  return NextResponse.json({ success: true, file: data });
};
