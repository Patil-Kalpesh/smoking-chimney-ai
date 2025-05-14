import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function index() {
  return (
    <div>
          <div className="w-full bg-black flex h-[80px] justify-center py-6">
            <div className='w-[35px] h-[35px]  me-2'><Link href={'https://www.instagram.com/smoking_chimney/'}><Image src="/images/004-instagram.svg" width={35} height={35}  alt="icon2" /></Link></div>
            <div className='w-[35px] h-[35px]  me-2'><Link href={"https://www.linkedin.com/company/smokingchimney/?viewAsMember=true"}><Image src="/images/006-linkedin.svg" width={35} height={35} alt="icon2" /></Link></div>
            {/* <div className='w-[35px] h-[35px]  me-2'><Link href={''}><Image src="/images/001-facebook.svg" width={35} height={35} alt="icon2" /></Link></div> */}
            <div className='w-[35px] h-[35px]  me-2'><Link href={'https://x.com/smokingchimney_'}><Image src="/images/002-twitter.svg" width={35} height={35} alt="icon2" /></Link></div>
            <div className='w-[35px] h-[35px] '><Link href={'https://wa.me/917721912611'}><Image src="/images/008-whatsapp 1.svg" width={35} height={35} alt="icon2" /></Link></div>
          </div>
    </div>
  )
}
