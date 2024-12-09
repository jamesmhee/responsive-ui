import {
    Carousel,
    CarouselContent,
    CarouselItem,    
  } from "@/components/ui/carousel"

const HomeCarousel = () => {
  return (
    <div className="rounded-xl my-3 dark:text-zinc-300">        
        <div className="flex flex-col gap-5">
        <Carousel>
            <CarouselContent className="flex gap-2 mx-2">
                {
                    [...Array(5)].map((elm,index)=>(
                        <CarouselItem key={index} className="rounded-xl bg-white dark:bg-zinc-800 shadow-sm border h-44 max-w-[calc(100vw_-_100px)]">1{index}</CarouselItem>
                    ))
                }                
            </CarouselContent>            
        </Carousel>        
        </div>
    </div>
  )
}

export default HomeCarousel