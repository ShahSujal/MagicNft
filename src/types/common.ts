export enum OrderType {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
  }
  
  export enum NftType {
    PLATFORM_GENERATED = "PLATFORM_GENERATED",
    AI_GENERATED = "AI_GENERATED"
  }
  
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