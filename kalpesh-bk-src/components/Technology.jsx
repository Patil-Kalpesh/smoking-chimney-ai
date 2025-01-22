"use client"
import React from 'react'
import Image from 'next/image'
import { IntegrityCard } from './IntegrityCard'
import Contact from './ContactForm/Contact'


  
export default function Technology() {
  return (
    <>
    {/*----- Section-1 ----- */}
    <div className='container mx-auto w-full'>
        <div className=' h-[600px] flex items-center justify-center bg-no-repeat bg-contain banner-bg-img'>
            <div className='mx-auto max-w-7xl'>
                <div className='px-[20px]'>
                    <h1 className='font-sofia font-medium text-center text-[60px] lg:text-[72px]  leading-[85.21px] lg:pt-[0px] pb-2 tracking-[-1.21px]'>Proactive, Dynamic &  <span className='text-[#ED5729]'>Bold</span>. </h1>
                    <div className="singleLine"><p className='font-sofia font-light  text-[#212529] text-[26px]  text-center'>Experience trustworthy, innovative solutions that&apos;s ready optimally for the years ahead.</p></div>
                    <div className='text-center mt-5 lg:mt-6'>
                        <button className='btn-lightup'>Get Amplified!!</button>
                    </div>
                </div>
            </div>
        </div>
        {/*----- section-2 ----- */}
        <div className=' mx-auto h-100 w-full  px-8 lg:px-[20px] py-[60px] bg-[#EEF3ED]'>
            <div className='text-center '>
                <p className='lg:text-xl text-lg lg:pb-0 pb-3'>From vision to reality. We are your official catalyst.</p>
                <div className='lg:py-6'>
                    <h2 className='lg:text-[48px] text-[36px] font-medium leading-snug  lg:leading-[64px] lg:pb-0 pb-3'>We are a venture firm and digital agency.</h2>
        
                </div>
                <div className=''>
                <p className='text-[14px]  text-center'>Our mission is to transform <span className='text-[#ED5729]'>founder&apos;s </span> visions into remarkable brands. Choose traditional compensation or an equity offset through our Venture Model - your vision, your decision.</p>
                </div>
                
            </div>
        </div>
        {/*----- section-3 ------  */}
         <div className='container mx-auto px-8 lg:px-10 py-[60px] '>
            <p className='text-center text-[26px]'>Enhance the lives of millions of people</p>
            <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> <span className='text-[#ED5729]'> We are eager </span> to contribute in <br /><span className='text-[#ED5729]'>revolutionary projects</span> </h2>
            {/* <h2 ref={ref} className={`text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium  ${inView ? 'text-[#ED5729]' : 'text-[#212529]' }`}> <span className='text-[#ED5729]'> We are eager </span> to contribute in <br /><span className='text-[#ED5729]'>revolutionary projects</span> </h2> */}
            <div className='pt-[38px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14'>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-1.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>AI </h3>
                    <ul className='pt-2 text-lg font-normal list-disc list-inside '>
                        <li>AI and Automation</li>
                        <li>Chat Bot Development</li>
                        <li>Fintech</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-2.svg"  width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Development </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>Mobile App Development</li>
                        <li>Website Development</li>
                        <li>E-commerce Development</li>
                        <li>Game Development</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-3.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Tech </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>ERP Software</li>
                        <li>CRM Software</li>
                        <li>XR Development </li>
                        <li>CMS Development</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-4.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>IT </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>Healthcare IT</li>
                        <li>iOT Development </li>
                        <li>WordPress Website Development </li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-5.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Design Solution </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>Digital Transformation</li>
                        <li>Software Development</li>
                        <li>User Experience </li>
                        <li>Product Design</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-6.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Testing </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>DevOps</li>
                        <li>QA & Testing Services </li>
                    </ul>
                </div>
            </div>
        </div>
        

        {/* ---- section-8------ */}
         <div className=" mx-auto px-8 lg:px-10 py-[60px]">
                  <h2 className=" lg:text-[48px] lg:py-[10px] leading-normal font-medium">Talk with our decision makers</h2>
                  <p className="text-[22px]">The team AI-powered wonder elevates mundane tasks into the astounding. </p>
                  <p className="text-[22px] pt-[20px]">Whether Hollywood-worthy stories to profound user experiences, we&apos;re the <br />first place to look for unprecedented changes in the digital realm.</p>
                  <div className="pt-[38px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-14">
                      <div className="card-item lg:p-4 ">
                          <div>
                            <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]">hi@smokingchimneystudios.com </p>
                            <p className="text-[#00000080]">Professional, accessible, and secure.</p>
                          </div>
                          <div className="pt-[30px]">
                            <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]">+91 77219 12611 </p>
                            <p className="text-[#00000080]">Dedicated, assist, and quick.</p>
                          </div>
                          <div className="pt-[30px]">
                            <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]">Punawale, PCMC, Pune - 411033, Maharashtra, India Jablonskistrasse 15, 10405 Berlin San Francisco, U.S.A</p>
                            <p className="text-[#00000080]">As Largest as Life, Conversations and Coffee</p>
                          </div>
                      </div>
                      <div className="card-item lg:p-4 px-1 ">
                         <Contact/>
                      </div>
                  </div>
        </div>
        {/* ------------------------ */}
    </div>
    </>
  )
}
