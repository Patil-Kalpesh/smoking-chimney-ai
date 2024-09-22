import React from 'react'

export default function index() {
  return (
    <div>
           <div className='container mx-auto h-100 w-full  px-[20px] py-[60px]'>
            <div className='text-center'>
                <p className='lg:text-[26px]'>We see world through every possible way</p>
                <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>Unique and badass Projects,   </h2>
                <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>powered by the latest AI tech.</h2>
            </div>
            <div className='flex justify-center gap-5 gap-y-3  h-100 lg:pt-[60px] pt-[30px] overflow-auto'>
                <div className="card py-[20px] px-[15px] w-[280px] bg-[#ED5729] rounded-lg">
                    <div className='h-[48px] w-[48px] bg-gray-700'></div>
                    <p className='text-[26px] font-medium lg:py-2 py-1 text-white'>Integrity</p>
                    <p className='text-white text-[14px]'>Doing what's right, Always striving!</p>
                </div>
                <div className="card py-[20px] px-[15px] w-[280px] bg-[#ED57291F] rounded-lg">
                    <div className='h-[48px] w-[48px] bg-gray-700'></div>
                    <p className='text-[26px] font-medium lg:py-2 py-1 '>Authenticity
                    </p>
                    <p className=' text-[14px]'>Truthfulness, honesty, and accuracy.</p>
                </div>
                <div className="card py-[20px] px-[15px] w-[280px] bg-[#ED57291F] rounded-lg">
                    <div className='h-[48px] w-[48px] bg-gray-700'></div>
                    <p className='text-[26px] font-medium lg:py-2 py-1 '>Reliability</p>
                    <p className=' text-[14px]'>Let us do best for you, Anytime!</p>
                </div>
                <div className="card py-[20px] px-[15px] w-[280px]  bg-[#ED57291F] rounded-lg">
                    <div className='h-[48px] w-[48px] bg-gray-700'></div>
                    <p className='text-[26px] font-medium lg:py-2 py-1 '>Integrity</p>
                    <p className=' text-[14px]'>Doing what's right, Always striving!</p>
                </div>
            </div>
            <div className='text-center  pt-14'>
                <button className=' rounded-lg bg-[#ED5729] text-white px-8 py-1 font-semibold'>Let's light it up together!</button>
            </div>
        </div>
    </div>
  )
}
