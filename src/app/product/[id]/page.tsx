'use client'
import { useFetchProduct } from '@/hooks/useFetchProduct'
import { useParams } from 'next/navigation'
import React, {useEffect, useState, use} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdAttachMoney } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import { ProductsProps } from '@/app/interface/Products'
import { FaStar } from "react-icons/fa";
import Loading from '@/components/ui/loading'
import { useRouterContext } from '@/app/context/RouterContext'

interface ParamsProps {
  id: string
}

const page = ({params}: {params: Promise<ParamsProps>}) => {
  const { setHome } = useRouterContext()    
  const { id } = use(params)
  const [ data,setData ] = useState<ProductsProps>({} as ProductsProps)
  const { data:Product, isLoading, error, isError } = useFetchProduct(id)
  useEffect(()=>{
    if(Product){
      setData(Product)
    }
    window.scrollTo(0, 0)
  }, [Product])    
  return (
    <>      
        <div className='  sticky top-0 bg-yellow-400 dark:bg-zinc-800 p-5 flex justify-between items-center'>
          <Link onClick={()=>setHome('/')} scroll={false} href="/">
            <div className='text-zinc-50 dark:text-zinc-300 bg-yellow-500 dark:bg-zinc-950 rounded-full p-2 w-full'>
              <IoChevronBack/>
            </div>
          </Link>
          <span className='text-right'>
            {data?.title}
          </span>
        </div>        
        {
          isLoading ? <Loading/> :
          data.id &&
          <>
            <div className='flex w-full justify-center'>
              <div className='flex flex-col w-full justify-center m-2 p-2 border rounded-sm bg-white dark:bg-zinc-800'>
              <div className='w-full flex justify-end my-2'>
                <span className='px-2 border w-max rounded-xl text-sm bg-yellow-400 dark:bg-zinc-600 bg-opacity-65'>{data.category.toUpperCase()}</span>
              </div>
                <Image className='mx-auto' priority alt={data.title} src={data.image} width={500} height={500} style={{minWidth: '200px', maxWidth: '200px', height: 'auto'}}/>
                <div className='inline-flex items-center gap-1 justify-start w-full'>
                  <span><MdAttachMoney/></span>
                  <span className='font-semibold text-xl'>{data.price}</span>
                </div>                            
                <div className='inline-flex items-center gap-1 justify-start w-full'>
                  <span className='inline-flex items-center gap-1'><FaStar className='text-yellow-400'/> {data.rating.rate}/5.0</span>
                  <span className='inline-flex items-center gap-1'>Total Sold: {data.rating.count}</span>
                </div>
                <div className='flex flex-col'>
                  <p>Items Description: </p>
                  <h3 className='text-sm'>{data.description}</h3>
                </div>
              </div>
            </div>        
          </>                
        }
    </>
  )
}

export default page