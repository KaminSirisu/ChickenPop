import React from 'react';
import Link from 'next/link';
import { Kumar_One } from 'next/font/google';

const Kumar = Kumar_One({weight:"400",subsets:["latin"]})
export default function NavBar() {
  return (
    <nav className='bg-[#DE731E]'>
        <div className='flex justify-between items-center p-5 text-white'>
            <Link href="/" className={`${Kumar.className} mx-5 font-Kumar font-semibold text-4xl`}>
                Chicken Pop
            </Link>
            <ul className='flex space-x-20 mx-10 text-xl'>
                <li>
                    <Link href="/" className='font-semibold hover:underline'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/aboutus" className='font-semibold hover:underline'>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/location" className='font-semibold hover:underline'>
                        Location
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

