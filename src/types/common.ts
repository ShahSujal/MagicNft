import { NftType, orderType } from "@prisma/client";

export enum OrderType {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
  }
  
  // export enum NftType {
  //   PLATFORM_GENERATED = "PLATFORM_GENERATED",
  //   AI_GENERATED = "AI_GENERATED"
  // }
  
  enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
  }
  
  type User = {
    id: string;
    name: string;
    email: string | null;
    twitter: string | null;
    walletAddress: string;
    points: number;
    role: string;
    createdAt: Date;
    updatedAt: Date;
  };
  
  type View = {
    id: string;
    userId: string;
    nftId: string;
    createdAt: Date;
    user: User;
  };
  
  type Like = {
    id: string;
    userId: string;
    nftId: string;
    createdAt: Date;
    user: User;
  };
  
  export type NftExtendedType = {
    id: string;
    creatorId: string;
    image: string;
    title: string;
    description: string;
    shortDescription: string | null;
    orderType: string;
    PriceInEth: number;
    type: string;
    views: View[];
    likes: Like[];
    isBid: boolean;
    BidEndTime: Date | null;
    category: string[];
    rewardWinners: any[]; // Assuming Particpated type is defined elsewhere
    rewardEndDate: Date | null;
    rewardPoints: number | null;
    rewardForceCancelled: boolean | null;
    rewardTasks: any[]; // Assuming Tasks type is defined elsewhere
    AuctionBids: any[]; // Assuming AuctionBids type is defined elsewhere
    transactions: any[]; // Assuming Transactions type is defined elsewhere
    status: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
  };
  // export enum creationType {
  //   AI_NFT = "Ai NFT",
  //   PLATFORM_NFT = "Platform NFT",
  // }
  // export enum orderType {
  //   PRIVATE,
  //   PUBLIC,
  // }

  export interface TLoadDataType {
    step: number;
    type: NftType; // Adjust the type if `creationType` is not a string
    title: string;
    imageFile: File | undefined;
    description: string;
    shortDescription: string;
    image: string;
    PriceInEth: number;
    orderType: orderType; 
    category: string[];
    isBid: boolean;
    BidEndTime: string; 
    rewardEndDate: string; 
    rewardPoints: number;
    images: string[];
    address: string;
    tokenId?: string; 
    chainId?: number;
  }

export  enum EStatus {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    Reverted = "REVERTED"
} 
export type TApiResponse = {
    success:EStatus;
    title:string;
    description:string;
}
