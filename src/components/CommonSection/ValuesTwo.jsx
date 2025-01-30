"use client";
import React from 'react'
import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";
import HighlightText from "@/components/ui/HighlightText";
import {IntegrityCard} from "@/components/CommonSection/IntegrityCard";

export default function ValuesTwo() {
  return (
    <div  className="container mx-auto w-full px-[20px] py-[60px]">
    <div className="text-center align-middle">
      <p className="lg:text-xl text-sm font-normal">We see the world through every possible way</p>
 <HighlightText
          text="Unique and badass Projects, powered by the latest AI tech."
          highlightWords={["AI", "tech."]}
          className="text-center text-3xl lg:text-5xl font-medium transition-colors duration-500 lg:w-2/3 lg:ml-auto lg:mr-auto"
        />
      
    </div>

    <div className="card-container flex gap-6 gap-y-3 w-full h-full lg:pt-[60px] pt-[30px] mb-10 overflow-hidden">
      <IntegrityCard />
    </div>

    <div className="text-center pt-2">
      <button className="btn-lightup">Let&apos;s light it up together!</button>
    </div>
  </div>
  )
}
