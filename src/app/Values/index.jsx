import React from 'react'
// import Image from 'next/image';
export default function index() {
  return (
    <>
        <div className='container mx-auto h-100 w-full  px-[20px] py-[60px]'>
            <div className='text-center'>
                <p className='lg:text-[26px]'>We’re passionate creators of immersive digital content</p>
                <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>We’re more than just a <span className='text-[#ED5729]'>leading creative</span> </h2>
                <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>and <span className='text-[#ED5729]'>Interactive Solutions studio</span></h2>
            </div>
            <div className='lg:grid lg:grid-cols-5 gap-3 gap-y-3 lg:content-start h-100 lg:pt-[60px] pt-[30px]'>
                <div className='card col-span-2 flex items-center px-[30px] pb-[40px]'>
                    <p className='text-[26px]'>Easily shift from ideas to finished <br />product to increase productivity.    </p>
                </div>
                <div className="card pb-[20px]">
                    <div className='h-[48px] w-[48px] '><img src="/images/Icon-1.svg" alt="icon1" /></div>
                    <p className='font-medium lg:py-2 py-1'>Curious</p>
                    <p className='text-[#00000080]'>Seeking progress. <br /> Driven by wonder</p>
                </div>
                <div className="card pb-[20px]">
                    <div className='h-[48px] w-[48px] '><img src="/images/Icon-2.svg" alt="icon2" /></div>
                    <p className='font-medium lg:py-2 py-1'>Value Centric</p>
                    <p className='text-[#00000080]'>Invest in an interaction <br />unless it provides value</p>
                </div>
                <div className="card pb-[20px]">
                    <div className='h-[48px] w-[48px]'><img src="/images/Icon-3.svg" alt="icon3" /></div>
                    <p className='font-medium lg:py-2 py-1'>Aesthetic</p>
                    <p className='text-[#00000080]'>Meticulous attention. <br />Endless pursuit of perfection.</p>
                </div>
            </div>
        </div>
    </>
  )
}
