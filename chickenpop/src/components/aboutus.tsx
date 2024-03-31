import React from 'react';
import Image from 'next/image';
import { Itim } from 'next/font/google';

const itim = Itim({weight:"400", subsets:["latin"]});
export default function Aboutus() {
  return (
    <div>
      <div className='relative'>
       <Image
        src="/main.jpg"
        width={2000}
        height={300}
        alt="Name of Restaurant"
        />
        <div className='top-[10%] left-[25%] absolute text-center'>
          <div className={`bg-[#EDDCBB] rounded-xl font-bold text-9xl text-black ${itim.className}`}>
              <div>
                <p>WELCOME</p>
                <h2>to ChickenPop</h2>
              </div>
          </div>
          <p className='p-5 text-center text-xl'>Chicken Pop was born in Busan, South Korea in 2002 <br></br>and was raised in the heart of New York City.</p>
        </div>
        <div>
          <Image
            src="/story2.png"
            width={1400}
            height={500}
            alt="Founder"
            />
          <Image
            src="/story3.png"
            width={1600}
            height={500}
            alt="Obsessive"
          />
        </div>
        <div className='flex flex-row justify-between bg-[#F9B32C] w-full'>
          <Image
            src="/story-earth.png"
            width={500}
            height={400}
            alt="Earth"
          />
          <h2 className={`${itim.className} flex flex-col justify-center pr-20 text-bold text-4xl text-center`}>OUR MISSION: TO SHARE THE JOY OF KOREAN <br></br>COMFORT FOOD AROUND THE WORLD.</h2>
        </div>
      </div>
    </div>
  );
}
