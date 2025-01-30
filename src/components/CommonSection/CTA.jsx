"use client";
import React from 'react'
import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";

export default function CTA() {
  return (
    <div className=' mx-auto h-100 w-full bg-[#ED5729] '>
    <motion.div className='banner-bg-img-2'
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className='text-center px-[20px] py-[80px]'>
        <p className='text-xl lg:text-2xl font-normal'>We just see and do what others don&apos;t.</p>
        <div className='lg:py-3'>
          <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px] text-white'>We&apos;re dedicated to innovation and   </h2>
          <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px] text-white'>exceeding expectations</h2>
        </div>
        <div className='text-center pt-4'>
          <button className=' white-btn'>Let&apos;s light it up together!</button>
        </div>
      </div>
    </motion.div>
  </div>
  )
}
