import {
    simulateContract,
    writeContract,
    waitForTransactionReceipt,
  } from "@wagmi/core";
import {config} from "../../lib/provider/configprovider";
import { Address, formatUnits } from "viem";
import { EStatus, TApiResponse } from "@/types/common";
import { auctionAbi } from "../abi/AuctionAbi";

type TcreateAuctionType = {
  tokenId: number;
  startingPrice: number;
  EndTime: number;
}
type TbidNftType = {
  auctionId: number;
  price: number;
}
type TCompleteAuctionType = {
  auctionId: number;
}

export const createNftAuction = async ({tokenId, startingPrice, EndTime}:TcreateAuctionType): Promise<TApiResponse> => {
try {
    // Format price to ETH , currently only supporting 18 decimals
    const priceToWei = formatUnits(BigInt(startingPrice), 18);

    // EndTime in seconds
    const { request } = await simulateContract(config, {
        address: process.env.NEXT_PUBLIC_AUCTION_ADDRESS! as Address,
        abi: auctionAbi,
        functionName: "ListNFT",
        args:[
            BigInt(tokenId),
            BigInt(priceToWei),
            BigInt(EndTime),
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
            title:"Auction Created",
            description:"NFT listed successfully for auction.",
        }
    }else{
        return{
            success:EStatus.FAILED,
            title:"Auction Creation Failed",
            description:"Failed to list NFT for auction.",
        }
    }
} catch (error) {
    return{
        success:EStatus.FAILED,
        title:"Auction Creation Failed",
        description:"An error occurred while listing the NFT for auction."
    }
}

}

export const bidNft = async ({auctionId, price}:TbidNftType): Promise<TApiResponse> => {
try {

    const { request } = await simulateContract(config, {
        address: process.env.NEXT_PUBLIC_AUCTION_ADDRESS! as Address,
        abi: auctionAbi,
        functionName: "Bid",
        args:[
            BigInt(auctionId),
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
            title:"Bid Placed",
            description:"Bid placed successfully on the NFT.",
        }
    }else{
        return{
            success:EStatus.FAILED,
            title:"Bid Failed",
            description:"Failed to place bid on the NFT.",
        }
    }
} catch (error) {
    return{
        success:EStatus.FAILED,
        title:"Bid Failed",
        description:"An error occurred while placing the bid on the NFT.",
    }
}

}

export const endAuction = async ({auctionId}:TCompleteAuctionType): Promise<TApiResponse> => {
try {

    const { request } = await simulateContract(config, {
        address: process.env.NEXT_PUBLIC_AUCTION_ADDRESS! as Address,
        abi: auctionAbi,
        functionName: "completeAuction",
        args:[
            BigInt(auctionId),
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
            title:"Auction Ended",
            description:"Auction ended successfully.",
        }
    }else{
        return{
            success:EStatus.FAILED,
            title:"End Auction Failed",
            description:"Failed to end the auction.",
        }
    }
} catch (error) {
    return{
        success:EStatus.FAILED,
        title:"End Auction Failed",
        description:"An error occurred while ending the auction.",
    }
}

}

export const withdrawFunds = async ({auctionId}:TCompleteAuctionType): Promise<TApiResponse> => {
try {

    const { request } = await simulateContract(config, {
        address: process.env.NEXT_PUBLIC_AUCTION_ADDRESS! as Address,
        abi: auctionAbi,
        functionName: "withdrawFunds",
        args:[
            BigInt(auctionId),
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
            title:"Funds Withdrawn",
            description:"Funds withdrawn successfully from the auction.",
        }
    }else{
        return{
            success:EStatus.FAILED,
            title:"Withdraw Funds Failed",
            description:"Failed to withdraw funds from the auction.",
        }
    }
} catch (error) {
    return{
        success:EStatus.FAILED,
        title:"Withdraw Funds Failed",
        description:"An error occurred while withdrawing funds from the auction.",
    }
}

}