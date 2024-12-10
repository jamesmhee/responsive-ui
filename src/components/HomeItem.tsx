'use client'

import { useFetchProducts } from '@/hooks/useFetchProducts'
import React, { useEffect } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import Image from 'next/image'
import { useAppContext } from '@/app/context/AppContext'
import { MdAttachMoney } from "react-icons/md";


const SkeltonItem = ({length}: {length: number}) =>{
    return (
        <>
        {
            [...new Array(length)].map((elm, index)=>(
                <Skeleton key={index} className="flex-1 basis-2/5 h-[220px] rounded-xl bg-white dark:bg-zinc-800" />
            ))
        }            
        </>    
    )
}

const HomeItem = () => {
    const { data, setData } = useAppContext()
    const { data:productsData, isLoading, isError, error } = useFetchProducts(data?.length > 0)
    useEffect(()=>{
        if(productsData){            
            setData((prev)=>productsData)
        }
    }, [productsData])
    console.log(data)
  return (
    <div className='m-2 flex flex-wrap gap-2 flex-col'>
        <h3 className='dark:text-zinc-300'>สินค้าทั้งหมด</h3>
        <div className='flex flex-wrap gap-2'>            
            {
                isLoading ? <SkeltonItem length={6}/> : 
                data?.map((elm,index)=>(
                    <div key={index} className='bg-white flex-1 basis-2/5 min-h-[300px] dark:bg-zinc-800 p-2 border rounded-xl justify-between flex-col flex'>
                        <div>
                            <Image className='rounded mb-2' width={500} height={500} style={{height: '150px', width: '100%'}} alt={elm.title} src={elm.image}/>
                            <span className='text-base'>
                                {elm.title.substring(0, 35)}
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-xl'><MdAttachMoney/></span>
                            <p className='text-sm'>
                                {elm.price}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HomeItem