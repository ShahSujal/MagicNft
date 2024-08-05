import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Badge } from '@/components/ui/badge'

import { TabsList , TabsContent, Tabs, TabsTrigger} from '@/components/ui/tabs'
  
type Props = {}
/*
 <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
*/
const Leaderboard = (props: Props) => {
  return (
    <main className="overflow-y-auto w-full flex flex-col h-screen ">
        
        <h1 className="text-[34px] text-zinc-100 font-semibold mt-4 ml-4">Leaderboard</h1>
        <h1 className="text-[20px] text-zinc-700 font-semibold mt-4 ml-4">Top Nft's</h1>

<Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative px-2"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
            <div className="p-1">
              <Card className='bg-[#ffffff4d]'>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=' absolute left-3 top-1/2' />
      <CarouselNext className=' absolute right-3 top-1/2'  />
    </Carousel>
     
        <main className="grid flex-1 items-center justify-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start w-full gap-4 md:gap-8 lg:col-span-4 ">
       
            <Tabs defaultValue="week" className=' w-full '>
              
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3" className='bg-[#ffffff29]'>
                  <CardHeader className="px-7">
                    <CardTitle>Top Creator </CardTitle>
                  
                    <CardDescription>
                     Rank of the top NFT's
                     
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table className=''>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Type
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody >
                 
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Refund
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        
                      
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
         
     </main>
     <h1 className="text-[20px] text-zinc-700 font-semibold mt-4 ml-4">Best of AI tools</h1>

<Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative px-2"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
            <div className="p-1">
              <Card className='bg-[#ffffff4d]'>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=' absolute left-3 top-1/2' />
      <CarouselNext className=' absolute right-3 top-1/2'  />
    </Carousel>

    </main>
  )
}

export default Leaderboard