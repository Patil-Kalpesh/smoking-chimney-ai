"use client";
import React from 'react'
import { motion } from "framer-motion";
import { slideUp, parentContainerVariants } from "@/lib/variants";
import Image from 'next/image';
import HighlightText from '../ui/HighlightText'

export default function Ethics() {
  return (
    <section className=' bg-[#EEF3ED]'>
    <div className='container mx-auto max-w-7xl px-8 lg:px-[20px] py-[60px] '>
      <p className='lg:text-xl text-sm font-normal text-center'>Positive impact while adhering to ethical standards</p>
        <HighlightText
            text="Solutions That Matter, Simplified."
            highlightWords={['Simplified.']}
            className="text-center text-3xl lg:text-5xl font-medium lg:w-2/3 lg:ml-auto lg:mr-auto"

        />

      <motion.div className='pt-[38px] lg:px-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-10'
        variants={parentContainerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      >
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-1.svg" width={48} height={48} alt="Traced" /></div>
          <h3 className='text-lg py-2 border-b-[1px] border-black'>Innovative </h3>
          <p className='text-[14px] text-[#00000080] pt-2'>We stay ahead of the curve with cutting-edge AI technologies.</p>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-2.svg" width={48} height={48} alt="Traced" /></div>
          <h3 className='text-lg py-2 border-b-[1px] border-black'>Useful </h3>
          <p className='text-[14px] text-[#00000080] pt-2'>Solutions are designed to solve real-world problem.</p>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-3.svg" width={48} height={48} alt="Traced" /></div>
          <h3 className='text-lg py-2 border-b-[1px] border-black'>Aesthetic </h3>
          <p className='text-[14px] text-[#00000080] pt-2'>Stunning Visuals and user-friendly experience.</p>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-4.svg" width={48} height={48} alt="Traced" /></div>
          <h3 className='text-lg py-2 border-b-[1px] border-black'>Honest </h3>
          <p className='text-[14px] text-[#00000080] pt-2'>Transparent communication and ethical AI practices.</p>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-5.svg" width={48} height={48} alt="Traced" /></div>
          <h3 className='text-lg py-2 border-b-[1px] border-black'>Long-lasting </h3>
          <p className='text-[14px] text-[#00000080] pt-2'>Built to scale and evolve with your business.</p>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-6.svg" width={48} height={48} alt="Traced" /></div>
          <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Thorough </h3>
          <p className='text-[14px] text-[#00000080] pt-2'>Assessments and analysis along with best AI strategies.</p>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-4.svg" width={48} height={48} alt="Traced" /></div>
          <h3 className='text-lg py-2 border-b-[1px] border-black'>Understandable </h3>
          <p className='text-[14px] text-[#00000080] pt-2'>Break down complex AI concepts into simple terms.</p>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-8.svg" width={48} height={48} alt="Traced" /></div>
          <h3 className='text-lg py-2 border-b-[1px] border-black'>Unobtrusive </h3>
          <p className='text-[14px] text-[#00000080] pt-2'>Integrate seamlessly into your existing systems.</p>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-9.svg" width={48} height={48} alt="Traced" /></div>
          <h3 className='text-lg py-2 border-b-[1px] border-black'>Environmentally friendly </h3>
          <p className='text-[14px] text-[#00000080] pt-2'>Environment Friendly & sustainable in every AI solutions.</p>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-10.svg" width={48} height={48} alt="Traced" /></div>
          <h3 className='text-lg py-2 border-b-[1px] border-black'>Little design </h3>
          <p className='text-[14px] text-[#00000080] pt-2'>Functionality and clarity, with minimal distractions.</p>
        </motion.div>

      </motion.div>
    </div>
  </section>
  )
}
