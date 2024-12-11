'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { PiShoppingCartFill } from 'react-icons/pi';
import { GoHomeFill } from "react-icons/go";
import { FaBars } from "react-icons/fa6";


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
    <div className="basis-20 w-full flex max-h-16">
      <ul className="flex items-center justify-center w-full px-5 border bg-white shadow-md shadow-neutral-600 dark:bg-zinc-800 h-full">        
        <div className={'h-full w-full flex items-center justify-center transition-all duration-200 ' + (isActive === 'home' ? 'bg-zinc-100 bg-opacity-70' : '')}>
          <Link href="/" className={isActive === 'home' ? 'pointer-events-none' : ''}>          
            <li className={"cursor-pointer text-3xl " + (isActive === 'home' ? 'text-yellow-400 dark:text-zinc-500' : '' )}><GoHomeFill /></li>
          </Link>
        </div>
        <div className={'h-full w-full flex items-center justify-center transition-all duration-200 ' + (isActive === 'cart' ? 'bg-zinc-100 bg-opacity-70' : '')}>
          <Link href="/cart" className={isActive === 'cart' ? 'pointer-events-none' : ''}>          
            <li className={"cursor-pointer text-4xl " + (isActive === 'cart' ? 'text-yellow-400 dark:text-zinc-500' : '')}><PiShoppingCartFill/></li>          
          </Link>
        </div>
        <div className={'h-full w-full flex items-center justify-center transition-all duration-200 ' + (isActive === 'setting' ? 'bg-zinc-100 bg-opacity-70' : '')}>
          <Link href="/setting" className={isActive === 'setting' ? 'pointer-events-none' : ''}>          
            <li className={"cursor-pointer text-2xl " + (isActive === 'setting' ? 'text-yellow-400 dark:text-zinc-500' : '')}><FaBars /></li>
          </Link>        
        </div>
      </ul>
    </div>
  );
};

export default FixedBar;
