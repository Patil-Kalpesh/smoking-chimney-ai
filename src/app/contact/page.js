import Contact from '@/components/CommonSection/Contact'
import { Divide } from 'lucide-react'
import React from 'react'
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'

export default function page() {
  return (
    <>
    <Header/>
      <div className='mt-14'>
      <Contact />
      </div>
    <Footer/>
  </>
  )
}
