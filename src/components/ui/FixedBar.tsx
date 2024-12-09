'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { PiShoppingCartFill } from 'react-icons/pi';

const FixedBar = () => {
  const pathname = usePathname()
  const [isActive, setIsActive] = useState('home')

  const findActive = () =>{
    if(pathname === '/'){
      setIsActive('home')
    }else if(pathname === '/cart'){
      setIsActive('cart')
    }else if(pathname === '/setting'){
      setIsActive('setting')
    }
  }

  useEffect(()=>{
    findActive()
  }, [pathname])

  return (
    <div className="basis-20 w-full flex">
      <ul className="flex items-center justify-between w-full px-5 border bg-white shadow-md shadow-neutral-600 dark:bg-zinc-800">
        <Link href="/">
          <li className={"w-16 cursor-pointer " + (isActive === 'home' ? 'font-semibold text-blue-500 dark:text-zinc-500' : '')}>Home</li>
        </Link>
        <Link href="cart">          
          <li className={"w-16 cursor-pointer text-5xl " + (isActive === 'cart' ? 'font-semibold text-blue-500 dark:text-zinc-500' : '')}><PiShoppingCartFill/></li>          
        </Link>
        <Link href="setting">
          <li className={"w-12 cursor-pointer " + (isActive === 'setting' ? 'font-semibold text-blue-500 dark:text-zinc-500' : '')}>Setting</li>
        </Link>        
      </ul>
    </div>
  );
};

export default FixedBar;
