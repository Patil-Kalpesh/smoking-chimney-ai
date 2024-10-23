import React from 'react'
import Image from 'next/image';

export default function index() {
  return (
    <>
      <section className=''>
        <div className='container mx-auto px-[20px] py-[60px] '>
            <p className='text-center text-[26px]'>Enhance the lives of millions of people</p>
            <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> <span className='text-[#ED5729]'> We are eager </span> to contribute in <br /><span className='text-[#ED5729]'>revolutionary projects</span> </h2>
            <div className='pt-[38px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14'>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-1.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>AI </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>AI and Automation</li>
                        <li>Chat Bot Development</li>
                        <li>Fintech</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-2.svg"  width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Development </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Mobile App Development</li>
                        <li>Website Development</li>
                        <li>E-commerce Development</li>
                        <li>Game Development</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-3.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Tech </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>ERP Software</li>
                        <li>CRM Software</li>
                        <li>XR Development </li>
                        <li>CMS Development</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-4.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>IT </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Healthcare IT</li>
                        <li>iOT Development </li>
                        <li>WordPress Website Development </li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-5.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Design Solution </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Digital Transformation</li>
                        <li>Software Development</li>
                        <li>User Experience </li>
                        <li>Product Design</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-6.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Testing </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>DevOps</li>
                        <li>QA & Testing Services </li>
                    </ul>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}
