import React from "react";
import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <>
      <motion.div
        initial={{
          clipPath: "circle(150% at 100% 100%)",
        }}
        animate={{
          clipPath: "circle(0% at 100% 100%)",
          transitionEnd: {
            clipPath: "circle(0% at 0% 0%)",
            display: "none",
          },
        }}
        exit={{
          display: "block",
          clipPath: "circle(150% at 0% 0%)",
        }}
        transition={{
          duration: 0.6,
          ease: [0.5, 0.02, -0.03, 0.9],
        }}
        className="overlay"
      ></motion.div>
    </>
  );
};

export default PageTransition;
