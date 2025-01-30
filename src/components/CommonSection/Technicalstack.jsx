"use client";
import React from 'react'
import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";
import Image from 'next/image';
import HighlightText from '../ui/HighlightText';

export default function Technicalstack() {
  return (
    <section >
    <div className='container mx-auto px-8 lg:px-10 py-[60px] '>
      <p className='lg:text-xl text-sm font-normal text-center'>Build & run modern, AI-powered experiences , Designed to support <br /> you throughout your app development journey.</p>
<HighlightText
    text="Get to market quickly and securely with products that can scale globally"
    highlightWords={['Get','to','market','quickly','scale', 'globally']}
     className="text-center text-3xl lg:text-5xl font-medium transition-colors duration-500 lg:w-2/3 lg:ml-auto lg:mr-auto"
/>

      <div className='pt-[38px] pb-[25px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-14'>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className='flex justify-between border-b-[1px] border-black py-2'>
            <h3 className='text-lg font-normal'>AI Applications </h3>
            <span><button className='explore-btn'>Explore More</button></span>
          </div>
          <ul className='pt-2 flex gap-5'>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>

          </ul>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className='flex justify-between border-b-[1px] border-black py-2'>
            <h3 className='text-lg font-normal'>Mobile Applications </h3>
            <span><button className='explore-btn'>Explore More</button></span>
          </div>
          <ul className='pt-2 flex gap-5'>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
          </ul>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className='flex justify-between border-b-[1px] border-black py-2'>
            <h3 className='text-lg font-normal'>Web Applications </h3>
            <span><button className='explore-btn'>Explore More</button></span>
          </div>
          <ul className='pt-2 flex gap-5'>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
          </ul>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className='flex justify-between border-b-[1px] border-black py-2'>
            <h3 className='text-lg font-normal'>E-commerce Applications </h3>
            <span><button className='explore-btn'>Explore More</button></span>
          </div>
          <ul className='pt-2 flex gap-5'>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
            <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
          </ul>
        </motion.div>

      </div>
    </div>
  </section>
  )
}
