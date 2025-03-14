import React from 'react'
import FrontendBolgs from '@/components/Blog/FrontendBolgs'
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'

export default function page() {
  return (
    <div >
        <Header/>
        <FrontendBolgs/>
        <Footer/>
    </div>
  )
}
