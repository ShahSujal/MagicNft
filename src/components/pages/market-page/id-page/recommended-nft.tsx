import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import Image from "next/image"
  
  export function RecommendedNft() {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-screen items-center justify-center p-6">
            <Image src={'/images/nft2.jpg'} alt="" width={1000} height={1000} className=" w-full h-full object-cover "/>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
              <Image src={'/images/nft1.jpg'} alt="" width={1000} height={1000} className=" w-full h-full object-cover "/>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
              <Image src={'/images/nft3.jpg'} alt="" width={1000} height={1000} className=" w-full h-full object-cover"/>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  