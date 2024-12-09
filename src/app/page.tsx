import HomeCarousel from "@/components/HomeCarousel";
import HomeItem from "@/components/HomeItem";
import HomeTop from "@/components/HomeTop";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeTop/>
      <HomeCarousel/>
      <HomeItem/>
    </>
  );
}
