import React from "react";
import Image from "next/image";
import { Limelight } from "next/font/google";
import { url } from "inspector";

const lime = Limelight({
  subsets: ["latin"],
  weight: '400'
});

export default function Banner() {
  return (
    <div className="relative h-screen">
      <div className="-z-10 absolute">
        <Image
          alt="banner"
          width={1000}
          height={1000}
          src="/Banner.jpg"
          className="w-full"
        ></Image>
      </div>
      <div className="top-[25%] left-[30%] absolute justify-center font-bold text-5xl text-white">
        <h1 className={lime.className}>ChickenPop</h1>
      </div>
    </div>
  );
}
//flex flex-col justify-center mt-30 text-center page-self-center