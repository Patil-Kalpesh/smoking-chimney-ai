"use client";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";
import Image from "next/image";
// import ServiceCard from "./ServiceCard";
import HighlightText from "@/components/ui/HighlightText";
import services from '@/data/services.json'



export default function ServiceSection() {
  return (
    <section>
      <div className="mx-auto  max-w-7xl px-8 lg:px-10 py-[60px]">
        <div className="pb-12 lg:pb-12 lg:px-28 text-center">
          <p className="text-lg lg:text-xl pb-3">
            Enhance the lives of millions of people
          </p>
          <HighlightText
          className="lg:text-[48px] text-[36px] font-medium lg:leading-[64px]"
            text="We are eager to contribute in revolutionary projects"
            highlightWords={["revolutionary", "projects"]}
          />
        </div>

        {/* Service Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-10 lg:gap-y-6 relative">
              {services.map((service, index) => {
                // Determine if the card is in the center position of the grid
                const isCenterCard = (index % 3 === 1); // Middle card in a 3-column layout

                return (
                  <motion.div
                    key={index}
                    className={`card-item lg:p-4   
                                  ${index >= 3 ? '' : ' '} relative`}
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                  >
                    {/* Pseudo-elements for borders (left and right borders only for the center card) */}
                    {isCenterCard && (
                      <>
                        {/* Only apply borders on large screens and above */}
                        <div className="absolute inset-0 lg:before:content-[''] lg:after:content-[''] 
                                        lg:before:absolute lg:after:absolute lg:before:w-[2px] lg:after:w-[2px] 
                                        lg:before:bg-gray-300 lg:after:bg-gray-300 
                                        lg:before:left-[-6px] lg:after:right-1 
                                        lg:before:top-14 lg:after:top-14 lg:before:h-48 lg:after:h-48">
                        </div>
                      </>
                    )}
                    <div className="h-[48px] w-[48px]">
                      <Image src={service.icon} width={48} height={48} alt="icon" />
                    </div>
                    <h3 className="text-[26px] py-2 leading-8">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
            {/* ------------ */}
      </div>
    </section>
  );
}
