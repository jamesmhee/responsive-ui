'use client'
import HomeCarousel from "@/components/HomeCarousel";
import HomeItem from "@/components/HomeItem";
import HomeTop from "@/components/HomeTop";
import Image from "next/image";
import { useAppContext } from "./context/AppContext";
import { useEffect } from "react";

export default function Home({customProp}: {customProp: number}) {
  const { onScroll, setOnScroll } = useAppContext()
  const handleScroll = (e: React.UIEvent) =>{
    const target = e?.currentTarget as HTMLDivElement    
    const scrollTop = target?.scrollTop
    if(scrollTop >= 189){
      
    }
    console.log(scrollTop)
  }

  return (
    <>
      <HomeTop/>
      <HomeCarousel/>
      <HomeItem/>
    </>
  );
}
