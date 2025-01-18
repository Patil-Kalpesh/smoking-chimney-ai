import React from "react";
import { motion } from "framer-motion";

const TextReveal = ({
  text,
  className = "",
  wordAnimationDuration = 0.60,
  wordStaggerDelay = 0.090,
  viewportMargin = "-100px 0px -300px 0px",
}) => {
  const words = text.split(" ");

  // Variants for each word
  const wordVariants = {
    hidden: { color: "rgba(0, 0, 0, 0.2)" },
    visible: {
      color: ["rgba(0, 0, 0, 0.2)", "rgb(237, 86, 40)", "rgba(0, 0, 0, 1)"],
      transition: { duration: wordAnimationDuration },
    },
  };

  // Container variants to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: wordStaggerDelay },
    },
  };

  return (
    <motion.h2
      className={`lg:text-[48px] text-[36px] font-medium lg:leading-[64px] ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: viewportMargin }}
      onViewportEnter={() => console.log("Entered viewport range")}
      onViewportLeave={() => console.log("Left viewport range")}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ display: "inline-block", margin: "0 5px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default TextReveal;
