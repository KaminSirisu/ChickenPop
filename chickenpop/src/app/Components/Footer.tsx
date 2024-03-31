import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Limelight} from "next/font/google";

const lime = Limelight({
    subsets: ["latin"],
    weight: '400'
});

export default function Footer() {
  return (
    <div className="bg-[#a14714] bg-clip-padding"><br></br>
        <div className={`${lime.className} mx-20 text-3xl`}>"Where every bite is a taste of home"</div>
        <br></br>
        <div className="flex flex-row mx-20 justify-evenly gap-64">

            <div className=''>
                <div className={`${lime.className} mb-3 text-2xl`}>ChickenPop</div>
                <div><p>Follow us</p></div>
                <div className="flex flex-auto my-2">
                    <a href="https://www.instagram.com/" target='/'>
                    <Image src={"/inst.png"} alt='Instragram' width={30} height={30} className='mx-1'></Image>
                    </a>
                    <a href="https://www.facebook.com/" target='/'>
                    <Image src={"/fb.png"} alt='Facebook' width={30} height={30} className='mx-1'></Image>
                    </a>
                    <a href="https://mail.google.com/" target='/'>
                    <Image src={"/mail.png"} alt='Mail' width={30} height={30} className='mx-1'></Image>
                    </a>
                    <a href="https://twitter.com/?lang=en" target='/'>
                    <Image src={"/twitter.png"} alt='Twitter' width={30} height={30} className='mx-1'></Image>
                    </a>
                </div>
            </div>

            <div className="flex flex-col">
                    <h1 className="mb-3 text-wrap"><pre>QuickLink</pre></h1>
                    <Link href={'/'} className="my-1 text-xs">Home</Link>
                    <Link href={'/aboutus'} className="my-1 text-xs">About us</Link>
                    <Link href={'/contact'} className="my-1 text-xs">Contact</Link>
            </div>

            <div className="flex flex-col">
            <h1 className="mb-3">Contact</h1>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora rem magni accusamus! Provident numquam porro magnam neque voluptatum iste consequuntur consectetur tenetur totam, nostrum libero tempore adipisci reiciendis at?
                </p>
            </div>

        </div>
        </div>
  )
}