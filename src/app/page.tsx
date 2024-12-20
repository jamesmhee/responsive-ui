'use client'
import HomeCarousel from "@/components/HomeCarousel";
import HomeItem from "@/components/HomeItem";
import HomeTop from "@/components/HomeTop";
import Image from "next/image";
import { useAppContext } from "./context/AppContext";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <HomeTop/>
      <HomeCarousel/>
      <HomeItem/>
    </>
  );
}
