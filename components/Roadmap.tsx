"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Roadmap: React.FC<{}> = () =>
{
  const progressToDragonSwap = 0.26;

  return (
    <motion.section
      id="roadmap"
      className="flex flex-col items-center justify-center h-full relative px-4 md:px-10 py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <motion.div
        className="flex flex-col justify-around flex-wrap items-center max-w-[900px]"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-white font-semibold text-4xl md:text-6xl"
          variants={fadeInUp}
        >
          Roadmap
        </motion.h1>
      </motion.div>
      <motion.p
        className="tracking-[0.2em] md:tracking-[0.5em] text-transparent font-light pb-3 md:pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 text-sm md:text-1xl"
        variants={fadeInUp}
      >
        Progress
      </motion.p>

      {/* Progress Bar Container */}
      <motion.div
        className="w-full max-w-3xl"
        variants={fadeInUp}
      >
        {/* Progress Bar Text */}
        <motion.div
          className="text-white text-lg md:text-xl flex items-center gap-2 justify-between"
          variants={fadeInUp}
        >
          <span className="font-bold">Goal: DragonSwap</span>
          <span className="text-blue-400">{progressToDragonSwap.toFixed(2)}%</span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-full bg-gray-700 rounded-full h-4 mt-2"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-blue-400 h-4 rounded-full"
            style={{ width: `${progressToDragonSwap}%` }}
            transition={{ duration: 1 }}
          />

        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Roadmap;
