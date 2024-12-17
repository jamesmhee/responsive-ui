'use client'

import React, { useEffect } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import Image from 'next/image'
import { useAppContext } from '@/app/context/AppContext'
import { MdAttachMoney } from "react-icons/md";
import Link from 'next/link'


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
    const { data, isLoading, searchData } = useAppContext()
  return (
    <div className='flex flex-wrap gap-2 flex-col mt-10 mb-5 px-2'>
        <h3 className='dark:text-zinc-300'>สินค้าทั้งหมด</h3>
        <div className='flex flex-wrap gap-2'>            
            {
                isLoading ? <SkeltonItem length={6}/> :
                
                searchData && searchData?.length > 0 ? 
                searchData?.map((elm,index)=>(
                    <div key={index} className='bg-white flex-1 basis-2/5 min-h-[300px] dark:bg-zinc-800 p-2 border rounded-xl justify-between flex-col flex'>
                        <Link scroll={false} href={`/product/${elm.id}`}>
                            <Image className='rounded mb-2' width={500} height={500} style={{height: '200px', width: '100%'}} alt={elm.title} src={elm.image}/>
                            <span className='text-base'>
                                {elm.title.substring(0, 35)}
                            </span>
                        </Link>
                        <div className='flex items-center'>
                            <span className='text-xl'><MdAttachMoney/></span>
                            <p className='text-sm'>
                                {elm.price}
                            </p>
                        </div>
                    </div>
                ))                
                :
                data?.map((elm,index)=>(
                    <div key={index} className='bg-white flex-1 basis-2/5 min-h-[300px] dark:bg-zinc-800 p-2 border rounded-xl justify-between flex-col flex'>
                        <Link scroll={false} href={`/product/${elm.id}`}>
                            <Image className='rounded mb-2' width={500} height={500} style={{height: '200px', width: '100%'}} alt={elm.title} src={elm.image}/>
                            <span className='text-base'>
                                {elm.title.substring(0, 35)}
                            </span>
                        </Link>
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