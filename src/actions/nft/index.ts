"use server";

import { client } from "@/lib/prisma";
import { base64ToBlob } from "@/services/action";
import { EStatus, TApiResponse, TLoadDataType } from "@/types/common";
import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
    pinataJwt: process.env.PINATA_JWT!,
    pinataGateway: process.env.PINATA_GATEWAY!,
  });
export const createNFT = async (loadData:TLoadDataType):Promise<TApiResponse> => {
    if (!loadData.imageFile) {
        return {
            success: EStatus.FAILED,
            title: "Image not found",
            description: "Please upload an image to continue",
        };
    }
    if (!loadData.address || !loadData.chainId || !loadData.tokenId) {
        return {
            success: EStatus.FAILED,
            title: "Address not found",
            description: "Please connect your wallet to continue",
        };
        
    }

    const imageBlob = base64ToBlob(loadData.image);
    console.log(imageBlob);
    

 
    const fileObject = new File([imageBlob], loadData.imageFile.type, { lastModified: loadData.imageFile.lastModified, type: loadData.imageFile.type });

    console.log(fileObject);
    
    const data = await pinata.upload.file(fileObject);

    console.log(data);
    
    
    const res = await client.nfts.create({
        data: {
            title: loadData.title,
            description: loadData.description,
            shortDescription: loadData.shortDescription,
            image: data.IpfsHash,
            PriceInEth: 3,
            orderType: loadData.orderType,
            category: loadData.category,
            isBid: false,
            type: loadData.type,
            creatorId: loadData.address,
            tokenId: loadData.tokenId, 
            chainId: loadData.chainId  
        }
    })
    
    return {
        success: EStatus.SUCCESS,
        title: "NFT created",
        description: "NFT created successfully",
    };


} 