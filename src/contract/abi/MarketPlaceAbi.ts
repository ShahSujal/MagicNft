export const marketPlaceAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "marketplaceId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "listPrice",
        type: "uint256",
      },
    ],
    name: "ListingCreated",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "marketplaceItemId", type: "uint256" },
      { internalType: "address", name: "nftAddress", type: "address" },
    ],
    name: "buyListing",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "address", name: "nftAddress", type: "address" },
      { internalType: "uint256", name: "price", type: "uint256" },
    ],
    name: "createListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "marketplaceItemId", type: "uint256" },
    ],
    name: "getMarketItem",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "marketplaceId", type: "uint256" },
          { internalType: "address", name: "nftAddress", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "address payable", name: "seller", type: "address" },
          { internalType: "address payable", name: "owner", type: "address" },
          { internalType: "uint256", name: "listPrice", type: "uint256" },
        ],
        internalType: "struct Marketplace.Listing",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMyListedNFTs",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "marketplaceId", type: "uint256" },
          { internalType: "address", name: "nftAddress", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "address payable", name: "seller", type: "address" },
          { internalType: "address payable", name: "owner", type: "address" },
          { internalType: "uint256", name: "listPrice", type: "uint256" },
        ],
        internalType: "struct Marketplace.Listing[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
