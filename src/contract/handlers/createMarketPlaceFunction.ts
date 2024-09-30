import {
    simulateContract,
    writeContract,
    waitForTransactionReceipt,
  } from "@wagmi/core";
  import {config} from "../../lib/provider/configprovider";
import { myTokenAbi } from "../abi/MyTokenAbi";
import { Address, formatUnits } from "viem";
import { EStatus, TApiResponse } from "@/types/common";
import { marketPlaceAbi } from "../abi/MarketPlaceAbi";

type TcreateContractType = {
  tokenId: number;
  NftAddress: Address;
  price: number;
}

export const createNftListing = async ({tokenId, NftAddress, price}:TcreateContractType): Promise<TApiResponse> => {
try {
    // Format price to ETH , currently only supporting 18 decimals
    const priceToWei = formatUnits(BigInt(price), 18);

    const { request } = await simulateContract(config, {
        address: process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS! as Address,
        abi: marketPlaceAbi,
        functionName: "createListing",
        args:[
            BigInt(tokenId),
            NftAddress,
            BigInt(priceToWei),
        ],
    });

    const response = await writeContract(config, request);

    const receipt = await waitForTransactionReceipt(config, {
        hash: response,
        confirmations: 10
    });
    if (receipt.status === "success") {
        return{
            success:EStatus.SUCCESS,
            title:"Success",
            description:"Token created successfully",
        }
    }else{
        return{
            success:EStatus.FAILED,
            title:"Failed to create token",
            description:"Token creation failed",
        }
    }
} catch (error) {
    return{
        success:EStatus.FAILED,
        title:"Failed to create token",
        description:"Token creation failed",
    }
}

}

export const buyNftListing = async ({tokenId, NftAddress, price}:TcreateContractType): Promise<TApiResponse> => {
try {
    const { request } = await simulateContract(config, {
        address: process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS! as Address,
        abi: marketPlaceAbi,
        functionName: "buyListing",
        args:[
            BigInt(tokenId),
            NftAddress,
        ],
        value: BigInt(price),
    });

    const response = await writeContract(config, request);

    const receipt = await waitForTransactionReceipt(config, {
        hash: response,
        confirmations: 10
    });
    if (receipt.status === "success") {
        return{
            success:EStatus.SUCCESS,
            title:"Success",
            description:"Token created successfully",
        }
    }else{
        return{
            success:EStatus.FAILED,
            title:"Failed to create token",
            description:"Token creation failed",
        }
    }
} catch (error) {
    return{
        success:EStatus.FAILED,
        title:"Failed to create token",
        description:"Token creation failed",
    }
}

}