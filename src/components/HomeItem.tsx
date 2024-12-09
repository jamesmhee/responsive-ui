import React from 'react'

type Props = {}

const HomeItem = (props: Props) => {
  return (
    <div className='m-2 flex flex-wrap gap-2 flex-col'>
        <h3 className='dark:text-zinc-300'>สินค้าทั้งหมด</h3>
        <div className='flex flex-wrap gap-2'>
            {
                [...new Array(10)].map((elm,index)=>(
                    <div key={index} className='bg-white flex-1 basis-2/5 h-[220px] dark:bg-zinc-800 p-2 border rounded-xl items-center justify-center'>
                        eiei
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HomeItem