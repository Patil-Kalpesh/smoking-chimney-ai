'use client'
// import React, { useEffect } from 'react'
import Image from 'next/image';

export default function index() {



  return (
    <div>
      <div id="scroll-div" className='container mx-auto w-full px-[20px] py-[60px]'>
        <div className='text-center'>
          <p className='lg:text-[26px] font-normal '>We see the world through every possible way</p>
          <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>Unique and badass Projects,</h2>
          <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>powered by the latest AI tech.</h2>
        </div>

        {/* Flex container for horizontal scroll */}
        <div className='card-container flex gap-6 gap-y-3 w-full h-full lg:pt-[60px] pt-[30px] mb-10 overflow-hidden'>
          {/* Individual Cards */}
          <div className="card p-7 w-[358px] h-[205px] bg-[#ED5729] rounded-lg flex-shrink-0">
            <div className='h-[48px] w-[48px] '>
              <Image src="/images/Icon-1.svg" width={48} height={48} alt="icon" />
            </div>
            <p className='text-[26.72px] font-normal lg:pt-3 pt-1 text-white'>Integrity</p>
            <p className='text-white text-[14px] lg:pt-3 pt-2'>Doing what's right, Always striving!</p>
          </div>

          <div className="card p-7 w-[358px] h-[205px] bg-[#ED57291F] rounded-lg flex-shrink-0">
            <div className='h-[48px] w-[48px] '>
              <Image src="/images/Icon-2.svg" width={48} height={48} alt="icon2" />
            </div>
            <p className='text-[26.72px] font-normal lg:pt-3 pt-1 '>Authenticity </p>
            <p className='text-[14px] lg:pt-3 pt-2'>Truthfulness, honesty, and accuracy.</p>
          </div>

          <div className="card p-7 w-[358px] h-[205px] bg-[#ED57291F] rounded-lg flex-shrink-0">
            <div className='h-[48px] w-[48px] '>
              <Image src="/images/Icon-2.svg" width={48} height={48} alt="icon2" />
            </div>
            <p className='text-[26.72px] font-normal lg:pt-3 pt-1 '>Reliability</p>
            <p className='text-[14px] lg:pt-3 pt-2'>Let us do best for you, Anytime!</p>
          </div>

          <div className="card p-7 w-[358px] h-[205px] bg-[#ED57291F] rounded-lg flex-shrink-0">
            <div className='h-[48px] w-[48px] '>
              <Image src="/images/Icon-2.svg" width={48} height={48} alt="icon2" />
            </div>
            <p className='text-[26.72px] font-normal lg:pt-3 pt-1 '>Integrity</p>
            <p className='text-[14px] lg:pt-3 pt-2'>Doing what's right, Always striving!</p>
          </div>
          <div className="card p-7 w-[358px] h-[205px] bg-[#ED57291F] rounded-lg flex-shrink-0">
            <div className='h-[48px] w-[48px] '>
              <Image src="/images/Icon-2.svg" width={48} height={48} alt="icon2" />
            </div>
            <p className='text-[26.72px] font-normal lg:pt-3 pt-1 '>Integrity</p>
            <p className='text-[14px] lg:pt-3 pt-2'>Doing what's right, Always striving!</p>
          </div>
        </div>

        <div className='text-center pt-5'>
          <button className='btn-lightup'>Let's light it up together! </button>
        </div>
      </div>
    </div>
  );
}
