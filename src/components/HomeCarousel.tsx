'use client'

import { useAppContext } from "@/app/context/AppContext"
import {
    Carousel,
    CarouselContent,
    CarouselItem,    
  } from "@/components/ui/carousel"
import { Skeleton } from "./ui/skeleton"
import Image from "next/image"

const HomeCarousel = () => {
    const { data } = useAppContext()
  return (
    <div className="rounded-xl my-3 dark:text-zinc-300">        
        <div className="flex flex-col gap-5">
        <Carousel>
            <CarouselContent className="flex gap-2 mx-2 h-44">
                {
                    data?.length > 0 ? 
                    data?.map((elm,index)=>(
                        <CarouselItem key={index} className="rounded-xl bg-white dark:bg-zinc-800 shadow-sm border max-w-[calc(100vw_-_100px)] flex items-center justify-center pr-4 object-contain">
                            <Image priority className="rounded" alt={elm.title} src={elm.image} width={500} height={500} style={{minWidth: '150px', maxWidth: '300px', height: '160px', objectFit: 'contain'}}/>
                        </CarouselItem>
                    ))
                    : 
                    [...Array(6)].map((elm, index)=>(
                        <CarouselItem key={index} className="h-44 max-w-[calc(100vw_-_100px)] dark:bg-zinc-800 bg-white shadow-sm border rounded-xl">
                            <Skeleton className="dark:bg-zinc-800"/>
                        </CarouselItem>
                    ))
                }                
            </CarouselContent>            
        </Carousel>        
        </div>
    </div>
  )
}

export default HomeCarousel