'use client'
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import { useRouterContext } from "../context/RouterContext";

const page = () => {
  const { setCart } = useRouterContext()
  return (
    <div className='sticky top-0   bg-yellow-400 dark:bg-zinc-800 p-5 flex justify-between items-center'>
      <Link onClick={()=>setCart('cart')} scroll={false} href={'cart'}>
        <div className='text-zinc-50 dark:text-zinc-300 bg-yellow-500 dark:bg-zinc-950 rounded-full p-2 w-full'>
          <IoChevronBack/>
        </div>
      </Link>
      <span className='text-right text-xl'>
        Checkout
      </span>
    </div>   
  )
};
export default page;
