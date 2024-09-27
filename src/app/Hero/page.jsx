"use client"

import React, {useEffect} from 'react'
import gsap from "gsap";

function page() {

  // useEffect(()=>{
  //   const t1 = gsap.timeline();
  //   t1.from(".singleLine .ani-text ",{
  //     y:10,
  //     ease:"power4.out",
  //     delay:1.8,
  //     stagger:{
  //       amount:0.4,
  //     }
  //   })
  // })
  return (
    <div className='pt-4 h-dvh'>
        <div className='px-[20px]'>
            <div className="singleLine"><p className='font-sofia font-medium ani-text text-center text-[60px] lg:text-[72px] text-[#212529] leading-[75px] lg:pt-[130px] pb-2'>Your imagination, <span className='text-[#ED5729]'>Amplified</span>. Digitally.</p></div>
            <div className="singleLine"><p className='font-sofia ani-text text-[#ED5729] text-[26px] py-5 text-center'>We solve real-world problems efficiently</p></div>
            <div className='text-center '>
                <button className='rounded-lg bg-[#ED5729] text-white px-8 py-1 mt-2 '>Get Amplified!!!</button>
            </div>
        </div>

    </div>
  )
}

export default page