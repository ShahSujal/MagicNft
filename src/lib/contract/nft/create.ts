import { createNFT } from "@/actions/nft";
import { fileToBase64 } from "@/services/action";
import { EStatus, TApiResponse, TLoadDataType } from "@/types/common";

export const createPlatformNft= async (data:TLoadDataType): Promise<TApiResponse> => {


      try {
      
      //   const { request } = await simulateContract(config, {
      //     address: process.env.NEXT_PUBLIC_INVESTOR_CONTRACT as Address,
      //     chainId: 97,
      //     abi: investorcontractabi,
      //     functionName: "listNewInvestor",
      //     args: [data.tokenName, data.tokenSymbol],
      //   });
      
      //   const hash = await writeContract(config, request);
      
        // const receipt = await waitForTransactionReceipt(config, {
        //   hash,
        //   confirmations: 1,
        // });
      
        // console.log({ receipt });
        
      
        // if (receipt.status === "success") {
         
        if (!data.imageFile) {
          return {
            success: EStatus.FAILED,
            title: "Image not found",
            description: "Please upload an image to continue",
          };
            
        }
      
      const base64Image = await fileToBase64(data.imageFile);

      const response = await createNFT({
        title: data.title,
        description: data.description,
        shortDescription: data.shortDescription,
        image: base64Image,
        PriceInEth: data.PriceInEth,
        orderType: data.orderType,
        category: data.category,
        isBid: data.isBid,
        BidEndTime: data.BidEndTime,
        rewardEndDate: data.rewardEndDate,
        rewardPoints: data.rewardPoints,
        images: data.images,
        type: data.type,
        address: data.address,
        imageFile: data.imageFile,
        step:0,
      })
     
        if (!response) {
          return {
            success: EStatus.FAILED,
            title: "Investment creation failed",
            description: "Investment creation failed",
          };
        }else{ 
            return {
                success: EStatus.SUCCESS,
                title: "Investment created",
                description: "Investment created successfully",
              };
          }
      } catch (error) {
        console.log(error);
        return {
          success: EStatus.FAILED,
          title: "Investment creation failed",
          description: "Investment creation failed",
        };
        
      }
}