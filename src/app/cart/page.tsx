'use client'

import { Carts, useFetchCart } from '@/hooks/useFetchCart'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'

const page = () => {
  const { data } = useAppContext()  
  const [productCounts, setProductCounts] = useState<Map<string, { name: string; count: number }>>(new Map())

  const { data: CartList, isLoading } = useFetchCart(productCounts.size <= 0)

  useEffect(() => {
    if (CartList) {            
      const counts = new Map<string, { name: string; count: number }>()
      CartList.forEach((cart) => {
        cart.products.forEach((product) => {
          const productName = data?.find((item) => item.id === product.productId)?.title ?? "Unknown Product"
          if (counts.has(product.productId.toString())) {
            counts.get(product.productId.toString())!.count += 1
          } else {
            counts.set(product.productId.toString(), { name: productName, count: 1 })
          }
        })
      })
      setProductCounts(counts)
    }
  }, [CartList, data])

  if (isLoading) return <>Loading...</>

  return (
    <div className='flex items-center flex-col justify-start'>
      Carts
      {/* {Array.from(productCounts.entries()).map(([productId, { name, count }]) => (
        <div key={productId} className="text-black text-wrap">
          {name} - จำนวน: {count}
        </div>
      ))}       */}
    </div>
  )
}

export default page
