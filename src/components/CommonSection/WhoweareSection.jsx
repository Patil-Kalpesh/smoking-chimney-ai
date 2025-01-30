"use client";
import React from 'react'
import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";

export default function WhoweareSection() {
  return (
    <motion.div 
      className="mx-auto h-100 w-full px-8 lg:px-[20px] py-[60px] bg-[#EEF3ED]"
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="text-center">
        <p className="lg:text-xl text-lg lg:pb-0 pb-3">
          We&apos;re high on innovation, sustainability, and keeping things simple.
        </p>
        <div className="lg:py-6">
          <h2 className="lg:text-[48px] text-[36px] font-medium leading-snug lg:leading-[64px] lg:pb-0 pb-3">
            Our solutions aren&apos;t just for today; they&apos;re ready for whatever the future throws at you.
          </h2>
        </div>
        <p className="text-[14px]">
          Our AI buddies are close friends to{" "}
          <span className="text-[#ED5729]">creative thinkers</span>,{" "}
          <span className="text-[#ED5729]">tech experts</span>, and{" "}
          <span className="text-[#ED5729]">strategists</span> who love to go on adventures.
        </p>
        <p className="text-[14px]">
          Whether you&apos;re an underdog or a colossal organization, we&apos;ve got you covered.
        </p>
      </div>
    </motion.div>
  )
}
