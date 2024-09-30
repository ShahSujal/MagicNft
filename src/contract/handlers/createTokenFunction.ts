import {
    simulateContract,
    writeContract,
    waitForTransactionReceipt,
  } from "@wagmi/core";
  import {config} from "../../lib/provider/configprovider";
import { myTokenAbi } from "../abi/MyTokenAbi";
import { Address } from "viem";

type TcreateContractType = {
  tokenURI: Address;
}

export const createTokenFunction = async ({tokenURI}:TcreateContractType) => {

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

}