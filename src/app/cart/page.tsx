'use client'

import { useFetchCart } from '@/hooks/useFetchCart'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import Link from 'next/link'
import { IoChevronBack } from "react-icons/io5";
import Loading from '@/components/ui/loading'
import Image from 'next/image'
import { use } from 'react'
import { Button } from '@/components/ui/button'

const page = () => {
  const { data } = useAppContext()
  const [productCounts, setProductCounts] = useState<Map<string, { name: string; count: number, image: string, price: number }>>(new Map())
  const [totalPrice, setTotalPrice] = useState(0)

  const { data: CartList, isLoading } = useFetchCart(productCounts.size <= 0)

  useEffect(() => {
    if (Array.isArray(CartList) && CartList.length > 0) {            
      const counts = new Map<string, { name: string; count: number, image: string, price: number }>()
      CartList.forEach((cart) => {
        cart.products.forEach((product) => {
          const productName = data?.find((item) => item.id === product.productId)

          if(!productName) return

          if (!counts.has(product.productId.toString())) {
            counts.set(product.productId.toString(), { name: productName!.title, count: 1, image: productName!.image, price: productName!.price})
          } else {
            counts.get(product.productId.toString())!.count += 1
          }
        })
      })
      setProductCounts(counts)
    }
  }, [CartList, data])

  useEffect(()=>{
    productCounts?.forEach((elm, index)=>{
      setTotalPrice((prev)=>prev += elm.count * elm.price)
    })
  }, [productCounts])
  
  return (
    <>
      <div className='sticky top-0 bg-yellow-400 dark:bg-zinc-800 p-5 flex justify-between items-center'>
        <Link scroll={false} href="/">
          <div className='text-zinc-50 dark:text-zinc-300 bg-yellow-500 dark:bg-zinc-950 rounded-full p-2 w-full'>
            <IoChevronBack/>
          </div>
        </Link>
        <span className='text-right text-xl'>
          Your Cart
        </span>
      </div>    
      {isLoading ? <Loading/> :      
      Array.from(productCounts.entries()).map(([productId, { name, count, image, price}]) => {        
        return (
          <div key={productId}  className='max-w-screen m-4 overflow-x-hidden dark:text-zinc-300'>
            <div className="bg-white dark:bg-zinc-800 border rounded-md p-2 w-full">
              <div className='flex gap-2 w-full justify-between min-h-[180px] items-center px-2'>
                <Image className='flex-initial' src={image} width={200} height={200} alt={name} style={{minWidth: '120px', height: '100%', maxHeight: '120px', maxWidth: '150px'}}/>
                <div className='flex-1 flex flex-col gap-8'>
                  <span className='dark:text-zinc-300 text-right font-semibold'>{name}</span>
                  <div className='w-full'>
                    <p className='text-right'>Quantity: {count} Piece</p>
                    <p className='text-right'>Total Price: ${count * price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      )}
      {
        CartList &&
        <div className='flex justify-between items-center max-w-screen border rounded-md bg-white dark:bg-zinc-800 m-4 p-4'>
          <span className='text-xl'>Total Price: ${Number(totalPrice).toFixed(2)}</span>
          <Button className='dark:bg-zinc-300 rounded-sm dark:hover:bg-zinc-600 hover:bg-yellow-500'>Check out</Button>
        </div>
      }
    </>
  )
}

export default page
