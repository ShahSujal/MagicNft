import {
    simulateContract,
    writeContract,
    waitForTransactionReceipt,
  } from "@wagmi/core";
  import {config} from "../../lib/provider/configprovider";
import { myTokenAbi } from "../abi/MyTokenAbi";
import { Address } from "viem";
import { EStatus, TApiResponse } from "@/types/common";

type TcreateContractType = {
  tokenURI: Address;
}

export const createTokenFunction = async ({tokenURI}:TcreateContractType): Promise<TApiResponse> => {
try {
    
    const { request } = await simulateContract(config, {
        address: process.env.NEXT_PUBLIC_MY_TOKEN_CONTRACT_ADDRESS! as Address,
        abi: myTokenAbi,
        functionName: "safeMint",
        args:[
            tokenURI,
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