'use client'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

const NotFound = (props: Props) => {
  useEffect(()=>{
    setTimeout(()=>{
      redirect('/')
    }, 5000)
  }, [])
  return (
    <div className='h-full w-full flex items-center justify-center'>
      404 | You will back to home in 5 seconds

    </div>
  )
}

export default NotFound