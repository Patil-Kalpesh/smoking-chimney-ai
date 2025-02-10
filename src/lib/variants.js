// Variations for Framer Motion ---shubhamdev



export const wordVariants = {
    hidden: { color: "rgba(0, 0, 0, 0.2)" }, 
    visible: {
      color: [
        "rgba(0, 0, 0, 0.2)", 
        "rgb(237, 86, 40)", 
        "rgba(0, 0, 0, 1)", 
      ],
      transition: {
        duration: 0.6, // Total duration for all word's animation
        
      },
    },

    // Highlighted word animation
    highlight: {
      color: "rgb(237, 86, 40)", 
      transition: {
        duration: 0.6, // Total duration for all word's animation
      },
    },
}

export const containerVariants = {
    hidden: { color: "rgba(0, 0, 0, 0.2)" },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.095, // Delay between each word animation
      },
    },
}


// text slide up animation

export const slideUp = {
    hidden: { y: "77px", opacity: 0 },
    visible: {
      y: "0px",
      opacity: 1,
      transition: {
        duration: 1.444
      },
    },
};


export const parentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.312, 
    },
  },
}

