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

const About: React.FC<{}> = () => {
  return (
    <motion.section
      id="about"
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
          ABOUT US
        </motion.h1>
        <motion.p
          className="tracking-[0.2em] md:tracking-[0.5em] text-transparent font-light pb-3 md:pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 text-sm md:text-1xl"
          variants={fadeInUp}
        >
          EXPLORE NOW
        </motion.p>
        <motion.p
          className="text-gray-300 text-center text-sm md:text-lg"
          variants={fadeInUp}
        >
          We&apos;re excited to bring you the first ever Halo community coin, your ultimate hub for all things Halo on SEI! Whether you&apos;re here for the latest
          Halo news, updates on the legendary game, or just to hang out with fellow fans, you&apos;ve come to the right place.
          <br />
          <br />
          But that&apos;s not all. 🚀
          <br />
          <br />
          We’re proud to announce that Halo Coin has officially launched! 🎉 Dive into the future where the epic world of Halo meets cutting-edge crypto innovation.
          <br />
          <br />
          Join the conversation, gear up for the journey, and let&apos;s make history together! 💥
          <br />
          <br />
          Spartan up, and welcome to The Halo on SEI!
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
