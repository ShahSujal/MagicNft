import {
    simulateContract,
    writeContract,
    waitForTransactionReceipt,
} from "@wagmi/core";
import { config } from "../../lib/provider/configprovider";
import { Address, formatUnits } from "viem";
import { EStatus, TApiResponse } from "@/types/common";
import { marketPlaceAbi } from "../abi/MarketPlaceAbi";

type TcreateMarketplaceType = {
    tokenId: number;
    NftAddress: Address;
    price: number;
};

export const createNftListing = async ({ tokenId, NftAddress, price }:TcreateMarketplaceType) : Promise<TApiResponse> => {
    try {
        // Format price to ETH, currently only supporting 18 decimals
        const priceToWei = formatUnits(BigInt(price), 18);

        const { request } = await simulateContract(config, {
            address: process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS! as Address,
            abi: marketPlaceAbi,
            functionName: "createListing",
            args: [
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
            return {
                success: EStatus.SUCCESS,
                title: "Listing Created",
                description: "NFT listed successfully.",
            };
        } else {
            return {
                success: EStatus.FAILED,
                title: "Listing Creation Failed",
                description: "Failed to list the NFT.",
            };
        }
    } catch (error) {
        return {
            success: EStatus.FAILED,
            title: "Listing Creation Failed",
            description: "An error occurred while listing the NFT.",
        };
    }
};

export const buyNftListing = async ({ tokenId, NftAddress, price }: TcreateMarketplaceType): Promise<TApiResponse> => {
    try {
        const { request } = await simulateContract(config, {
            address: process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS! as Address,
            abi: marketPlaceAbi,
            functionName: "buyListing",
            args: [
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
            return {
                success: EStatus.SUCCESS,
                title: "Purchase Successful",
                description: "NFT purchased successfully.",
            };
        } else {
            return {
                success: EStatus.FAILED,
                title: "Purchase Failed",
                description: "Failed to purchase the NFT.",
            };
        }
    } catch (error) {
        return {
            success: EStatus.FAILED,
            title: "Purchase Failed",
            description: "An error occurred while purchasing the NFT.",
        };
    }
};