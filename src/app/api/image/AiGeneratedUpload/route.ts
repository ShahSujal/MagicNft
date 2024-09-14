import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import { uuid } from "uuidv4";
type ResponseType = {
  data: {
    success: boolean;
    file: string;
  };
};
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const uuidstr = uuid();
  if (!process.env.IMAGE_API_URL) {
    throw new Error("IMAGE_API_URL is not defined");
  }
  const getImage = await axios.get(data.image,{
      responseType: "arraybuffer", // Set the response type to arraybuffer
    });
  if (await getImage.data) {
    const imageData = new Uint8Array(getImage.data);
    const imageBlob = new Blob([imageData]);
    const imageFile = new File([imageBlob], uuidstr, {
      type: imageBlob.type,
    });
    let formdata = new FormData();
    formdata.append("file", imageFile);
    let bodyContent = formdata;
    let reqOptions = {
      url: "http://localhost:3000/api/upload",
      method: "POST",
      data: bodyContent,
    };
    let response: ResponseType = await axios.request(reqOptions);
    if (!response.data) {
      return NextResponse.json({ success: false, error: "pinata upload error" });
    } else {
      return NextResponse.json({ success: true, image: response.data.file });
    }
  }
}
