"use client";
import React from 'react'
import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";
import ContactForm from "@/components/ContactUs/ContactForm"

export default function Contact() {
  return (
    <div>
          <motion.div className=" mx-auto max-w-7xl px-8 lg:px-10 py-[60px]"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "-100px" }}
        >
          <h2 className=" lg:text-[48px] lg:py-[10px] leading-normal font-medium">Talk with our decision makers</h2>
          <p className="text-[22px]">The team AI-powered wonder elevates mundane tasks into the astounding. </p>
          <p className="text-[22px] pt-[20px]">Whether Hollywood-worthy stories to profound user experiences, we&apos;re the <br />first place to look for unprecedented changes in the digital realm.</p>
          <div className="pt-[38px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-14">
            <motion.div className="card-item lg:p-4 "

            >
              <div>
                <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]">hi@smokingchimneystudios.com </p>
                <p className="text-[#00000080]">Professional, accessible, and secure.</p>
              </div>
              <div className="pt-[30px]">
                <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]">+91 77219 12611 </p>
                <p className="text-[#00000080]">Dedicated, assist, and quick.</p>
              </div>
              <div className="pt-[30px]">
                <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]"> PCMC - Pune, India - 411033</p>
                <p className="text-[#00000080]">As Largest as Life, Conversations and Coffee</p>
              </div>
            </motion.div>
            <div className="card-item lg:p-4 px-1 ">
              <ContactForm />
            </div>
          </div>
        </motion.div>
    </div>
  )
}
