"use client";
import { motion } from "framer-motion";
import { slideUp, parentContainerVariants } from "@/lib/variants";
import Image from "next/image";
import HighlightText from "@/components/ui/HighlightText";

export default function ValueSection() {
  return (
    <div className="mx-auto max-w-7xl px-8 lg:px-20 py-16 lg:py-20 bg-[#EEF3ED]">
      <div className="text-center">
        <p className="text-lg lg:text-xl">
          We&apos;re passionate creators of immersive digital content
        </p>
        <HighlightText
        className="lg:text-[48px] text-[36px] font-medium lg:leading-[64px]"
          text="We're more than just a leading creative and Interactive Solutions studio"
          highlightWords={["Interactive", "Solutions"]}
        />
      </div>
       <motion.div className='lg:grid lg:grid-cols-5 gap-3 gap-y-3 lg:content-start h-100 lg:pt-[60px] pt-[25px]'
            variants={parentContainerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.7, margin: "-100px" }}
          >
            <div className='text-center card col-span-2 flex items-center  pb-9 lg:pb-6'>
              <p className='text-xl lg:text-2xl'>Easily shift from ideas to finished product to increase productivity.    </p>
            </div>
            <motion.div className="card pb-[20px]"
              variants={slideUp}
            >
              <div className='h-[48px] w-[48px] '><Image src="/images/Icon-1.svg" width={48} height={48} alt="icon1" /></div>
              <p className='font-medium lg:py-2 py-1'>Curious</p>
              <p className='text-[#00000080]'>Seeking progress. <br /> Driven by wonder</p>
            </motion.div>
            <motion.div className="card pb-[20px]"
              variants={slideUp}
            >
              <div className='h-[48px] w-[48px] '><Image src="/images/Icon-2.svg" width={48} height={48} alt="icon2" /></div>
              <p className='font-medium lg:py-2 py-1'>Value Centric</p>
              <p className='text-[#00000080]'>Invest in an interaction <br />unless it provides value</p>
            </motion.div>
            <motion.div className="card pb-[20px]"
              variants={slideUp}
            >
              <div className='h-[48px] w-[48px]'><Image src="/images/Icon-3.svg" width={48} height={48} alt="icon3" /></div>
              <p className='font-medium lg:py-2 py-1'>Aesthetic</p>
              <p className='text-[#00000080]'>Meticulous attention. <br />Endless pursuit of perfection.</p>
            </motion.div>
       </motion.div>
    </div>
  );
}
