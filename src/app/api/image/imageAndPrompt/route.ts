import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  // if (data.apiKey !== process.env.API_KEY!) {
  //   return NextResponse.json({
  //     success: false,
  //     error: "Malicious Activity Not Allowed",
  //   });
  // }
  console.log(data);
  
  if (!data.prompt) {
    return NextResponse.json({ success: false, error: "Please Provide Story" });
  }

  console.log(data);
  
  const generateUuid = await axios.post(`${process.env.UUID_GENERATE_URL!}`, {
    prompt: data.prompt,
  });
  console.log(generateUuid.data);
  
  let generateImage;
  await new Promise((resolve) => setTimeout(resolve, 30000));
  generateImage = await axios.get(
    `${process.env.IMAGE_GENERATE_URL!}/${generateUuid.data.uuid}`
  );
  console.log(generateImage.data);
  
  if (generateImage.data && generateUuid.data) {
    console.log({
      image: generateImage?.data?.images,
    });

    if (!generateImage.data.images) {
      return NextResponse.json({
        success: false,
        error: "No Image Found",
      });
    }


    // for (let index = 0; index < generateImage.data.images.length; index++) {
    //   const element = generateImage.data.images[index];
    //   console.log(element);
    //   const addUrl = process.env.IMAGE_API_URL! + element;
    //   console.log(addUrl);
    //   const sec = await axios.post('http://localhost:3000/api/image/AiGeneratedUpload', {
    //     image: addUrl,
    //   })
    //   console.log(sec.data);
    // }
    const imagesWithDomain = generateImage?.data?.images?.map((image:string) =>process.env.IMAGE_API_URL! + image) || []
    return NextResponse.json({
      success: true,
      prompt:data.prompt,
      image: imagesWithDomain,
    });
    
  } else {
    return NextResponse.json({ success: false, error: "No Image Found" });
  }
}
