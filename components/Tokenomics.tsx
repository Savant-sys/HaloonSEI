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

const Tokenomics: React.FC<{}> = () =>
{
  return (
    <motion.section
      id="tokenomics"
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
          Tokenomics
        </motion.h1>
        <motion.p
          className="tracking-[0.2em] md:tracking-[0.5em] text-transparent font-light pb-3 md:pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 text-sm md:text-1xl"
          variants={fadeInUp}
        >
          The foundation of a decentralized future.
        </motion.p>
      </motion.div>

      {/* Added Halo-style content */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center text-white mt-8"
        variants={fadeInUp}
      >
        <motion.div
          className="p-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          <h1>Total Supply</h1>
          <h2 className="text-xl md:text-2xl font-bold"> 1,000,000,000</h2>

        </motion.div>
        <motion.div
          className="p-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          <h1>Market Cap</h1>
          <h2 className="text-xl md:text-2xl font-bold"> $2,664.55</h2>
        </motion.div>
        <motion.div
          className="p-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg"
          variants={fadeInUp}
        >

          <h1>Current Price</h1>
          <h2 className="text-xl md:text-2xl font-bold"> $0.00000000006137845</h2>
        </motion.div>
        <motion.div
          className="p-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg"
          variants={fadeInUp}
        >

          <h1>Holders</h1>
          <h2 className="text-xl md:text-2xl font-bold"> 7</h2>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 text-center text-white space-y-4"
        variants={fadeInUp}
      >
        <motion.p
          className="text-lg md:text-xl font-semibold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          variants={fadeInUp}
        >
          FAIR LAUNCH
        </motion.p>
        <motion.p
          className="text-lg md:text-xl font-semibold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          variants={fadeInUp}
        >
          NO TEAM ALLOCATION
        </motion.p>
        <motion.p
          className="text-lg md:text-xl font-semibold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          variants={fadeInUp}
        >
          NO PRESALE
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Tokenomics;
