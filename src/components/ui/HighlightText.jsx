"use client";
import React from "react";
import { motion } from "framer-motion";
import { wordVariants, containerVariants } from "@/lib/variants";

function HighlightText({ text, highlightWords, className = "" }) {
    const words = text.split(" ");
  return (
    <>
    <motion.h2
    className={` transition-colors duration-400  ${className}`} 
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ margin: "-100px 0px -300px 0px" }}
>
  {words.map((word, index) => (
    (word === "/n") ?( 
    <br key={index} />
    ) : <motion.span
    key={index}
    variants={wordVariants}
    style={{ display: "inline-block", margin: "0 5px" }}
    animate={highlightWords.includes(word) ? "highlight" : undefined}
  >
    {word}
  </motion.span>
  ))}
</motion.h2>
</>
  )
}

export default HighlightText