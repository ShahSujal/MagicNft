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
  
  interface User {
    walletAddress: string;
    // Add other User fields as needed
  }
  
  type View = {
    id: string;
    userId: string;
    nftId: string;
    createdAt: Date;
  }
  
  type Like = {
    id: string;
    userId: string;
    nftId: string;
    createdAt: Date;
  }
  
  type Participated ={
    id: string;
    userId: string;
    points: number;
    nftId: string;
    accuracy: number;
    createdAt: Date;
    rewardStatus: string;
  }
  
  type Task = {
    id: string;
    nftId: string;
    prompt: string;
  }
  
  interface AuctionBid {
    id: string;
    userId: string;
    nftId: string;
    amount: number;
    createdAt: Date;
  }
  
  interface Transaction {
    id: string;
    // Add other Transaction fields as needed
  }
  
  export type TNftType = {
    id: string;
    creatorId: string;
    user: User;
    image: string;
    title: string;
    description: string;
    shortDescription?: string;
    orderType: OrderType;
    priceInEth: number;
    type: NftType;
    views: View[];
    likes: Like[];
    isBid: boolean;
    bidEndTime?: Date;
    category: string[];
    rewardWinners: Participated[];
    rewardEndDate?: Date;
    rewardPoints?: number;
    rewardForceCancelled?: boolean;
    rewardTasks: Task[];
    auctionBids: AuctionBid[];
    transactions: Transaction[];
    status: Status;
    createdAt: Date;
    updatedAt: Date;
  }