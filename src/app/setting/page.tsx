import { Button } from '@/components/ui/button';
import { SwitchTheme } from '@/components/ui/switch-theme'
import React from 'react'
import { IoSettings } from "react-icons/io5";

const page = () => {
  return (
    <div className='p-2 w-full flex flex-col'>
      <div className='flex items-center justify-between rounded-xl boder bg-white p-5 dark:bg-zinc-800'>
        <h3 className='text-xl'>Setting</h3>
        <span className='text-xl'><IoSettings/></span>
      </div>
      <div className='flex flex-col items-center justify-between rounded-xl border bg-white p-5 dark:bg-zinc-800 mt-2 basis-full'>
        <div className='flex flex-col w-full gap-5'>
          <div className='flex border-b dark:border-zinc-700 pb-2 justify-between gap-2 items-center w-full'>
            <span>Theme</span>
            <SwitchTheme/>
          </div>
          {/* <div className='flex border-b dark:border-zinc-700 pb-2 justify-between gap-2 items-center w-full'>
            <span>Theme</span>
            <SwitchTheme/>
          </div> */}
        </div>
        <div className='pb-2 gap-2 w-full'>    
          <p className='w-full text-[0.55rem] my-2 text-zinc-400 text-center'>jemmyblair</p>      
          <Button className='dark:bg-zinc-300 w-full hover:bg-rose-500 dark:hover:bg-rose-500 dark:hover:text-white'>Logout</Button>
        </div>
      </div>
    </div>
  )
}

export default page