"use client"
import React from 'react'
import Image from 'next/image'
import Contact from '@/components/CommonSection/Contact'
import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";
import HighlightText from "./ui/HighlightText";
import Link from 'next/link';

  
export default function Technology() {
  return (
    <>
    {/*----- Section-1 ----- */}
    <div className='container mx-auto w-full'>
        <div className=' h-[600px] flex items-center justify-center bg-no-repeat bg-contain banner-bg-img'>
            <div className='mx-auto max-w-7xl'>
                <motion.div className='px-[20px]'
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true}}
                >
                    <h1 className='font-sofia font-medium text-center text-[60px] lg:text-[72px]  leading-[85.21px] lg:pt-[0px] pb-2 tracking-[-1.21px]'>Proactive, Dynamic &  <span className='text-[#ED5729]'>Bold</span>. </h1>
                    <div className="singleLine"><p className='font-sofia font-light  text-[#212529] text-[26px]  text-center'>Experience trustworthy, innovative solutions that&apos;s ready optimally for the years ahead.</p></div>
                    <div className='text-center mt-5 lg:mt-6'>
                        <button className='banner-btn'><Link href={'https://cal.com/smokingchimneystudios/free-consultation?layout=mobile'} target="_blank" >Get Amplified!!</Link></button>
                    </div>
                </motion.div>
            </div>
        </div>
        {/*----- section-2 ----- */}
        <div className='mx-auto h-100 w-full  px-8 lg:px-[20px] py-[60px] bg-[#EEF3ED]'>
            <motion.div className='text-center '
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            >
                <p className='lg:text-xl text-lg lg:pb-0 pb-3'>From vision to reality. We are your official catalyst.</p>
                <div className='lg:py-6'>
                    <h2 className='lg:text-[48px] text-[36px] font-medium leading-snug  lg:leading-[64px] lg:pb-0 pb-3'>We are a venture firm and digital agency.</h2>
        
                </div>
                <div className=''>
                <p className='text-[14px]  text-center'>Our mission is to transform <span className='text-[#ED5729]'>founder&apos;s </span> visions into remarkable brands. Choose traditional compensation or an equity offset through our Venture Model - your vision, your decision.</p>
                </div>
                
            </motion.div>
        </div>
            {/*----- section-3 ------  */}
         <div className='container mx-auto px-8 lg:px-10 py-[60px] '>
            <p className='text-center text-[26px]'>Enhance the lives of millions of people</p>
            {/* <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> <span className='text-[#ED5729]'> We are eager </span> to contribute in <br /><span className='text-[#ED5729]'>revolutionary projects</span> </h2> */}

            <HighlightText text="We are eager to contribute in /n revolutionary projects" highlightWords={["We", "are", "eager", "revolutionary", "projects"]} className="text-center lg:text-[48px]  lg:py-[10px] leading-normal font-medium text-3xl sm:text-4xl lg:text-5xl font-medium" />

            {/* <h2 ref={ref} className={`text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium  ${inView ? 'text-[#ED5729]' : 'text-[#212529]' }`}> <span className='text-[#ED5729]'> We are eager </span> to contribute in <br /><span className='text-[#ED5729]'>revolutionary projects</span> </h2> */}
            <div className='pt-[38px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14'>
                <motion.div className="card-item lg:p-4 "
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, ammount: 0.3, margin: "-100px"}}
                >
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-1.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>AI </h3>
                    <ul className='pt-2 text-lg font-normal list-disc list-inside '>
                        <li>AI and Automation</li>
                        <li>Chat Bot Development</li>
                        <li>Fintech</li>
                    </ul>
                </motion.div>
                <motion.div className="card-item lg:p-4 "
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, ammount: 0.3, margin: "-100px"}}
                >
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-2.svg"  width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Development </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>Mobile App Development</li>
                        <li>Website Development</li>
                        <li>E-commerce Development</li>
                        <li>Game Development</li>
                    </ul>
                </motion.div>
                <motion.div className="card-item lg:p-4 "
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, ammount: 0.3, margin: "-100px"}}
                >
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-3.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Tech </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>ERP Software</li>
                        <li>CRM Software</li>
                        <li>XR Development </li>
                        <li>CMS Development</li>
                    </ul>
                </motion.div>
                <motion.div className="card-item lg:p-4 "
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, ammount: 0.3, margin: "-100px"}}
                >
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-4.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>IT </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>Healthcare IT</li>
                        <li>iOT Development </li>
                        <li>WordPress Website Development </li>
                    </ul>
                </motion.div>
                <motion.div className="card-item lg:p-4 "
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, ammount: 0.3, margin: "-100px"}}
                >
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-5.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Design Solution </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>Digital Transformation</li>
                        <li>Software Development</li>
                        <li>User Experience </li>
                        <li>Product Design</li>
                    </ul>
                </motion.div>
                <motion.div className="card-item lg:p-4 "
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, ammount: 0.3, margin: "-100px"}}
                >
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-6.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Testing </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>DevOps</li>
                        <li>QA & Testing Services </li>
                    </ul>
                </motion.div>
            </div>
        </div>
      

        {/* ---- section-8------ */}
         <Contact/>
        {/* ------------------------ */}
    </div>
    </>
  )
}
