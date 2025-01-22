import React from 'react'
import Image from 'next/image';

export default function index() {
  return (
    <div>
        <div className="w-full bg-black flex h-[80px] justify-center py-6">
            <div className='w-[35px] h-[35px]  me-2'><Image src="/images/004-instagram.svg" width={35} height={35}  alt="icon2" /></div>
            <div className='w-[35px] h-[35px]   me-2'><Image src="/images/006-linkedin.svg" width={35} height={35} alt="icon2" /></div>
            <div className='w-[35px] h-[35px]   me-2'><Image src="/images/001-facebook.svg" width={35} height={35} alt="icon2" /></div>
            <div className='w-[35px] h-[35px]   me-2'><Image src="/images/002-twitter.svg" width={35} height={35} alt="icon2" /></div>
            <div className='w-[35px] h-[35px]   '><Image src="/images/008-whatsapp 1.svg" width={35} height={35} alt="icon2" /></div>
        </div>
    </div>
  )
}
