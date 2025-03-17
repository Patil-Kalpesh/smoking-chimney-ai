"use client";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="h-[600px] flex items-center justify-center bg-no-repeat bg-contain banner-bg-img">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="px-[20px] lg:py-10 py-24"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className=" font-sofia font-medium text-center text-[60px] lg:text-[72px] text-[#212529] leading-[85.21px] pb-2 tracking-[-1.21px]">
            Your imagination, <span className="text-[#ED5729]">Amplified</span>. Digitally.
          </h1>
          <p className="font-sofia font-light text-[#ED5729] text-[26px] text-center">
            We solve real-world problems efficiently
          </p>
          <div className="text-center mt-5 lg:mt-6 ">
           <button className=" banner-btn "> <Link href={'https://cal.com/smokingchimneystudios/free-consultation?layout=mobile'} target="_blank" >Get Amplified!!</Link></button> 
          </div>
        </motion.div>
      </div>
    </div>
  );
}
