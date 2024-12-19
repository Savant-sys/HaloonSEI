"use client";

import React from "react";
import Image from "next/image";
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

const Banner: React.FC<{}> = () =>
{
  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 md:px-20 mt-[50px] md:mt-[100px] z-[20]"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <div className="flex flex-col justify-center text-center">
        <motion.div className="justify-center flex" variants={fadeInUp}>
          <Image
            priority
            src="/Halo_logo.png"
            height={150}
            width={150}
            alt="Michael Khuri"
            className="md:h-[250px] md:w-[250px] mt-5"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 mt-4 md:mt-10 tracking-tighter text-4xl md:text-7xl font-semibold text-white max-w-[600px] animate-bounce"
          variants={fadeInUp}
        >
          Halo on SEI
        </motion.div>

        <motion.div className="flex justify-center mt-2 md:mt-4" variants={fadeInUp}>
          <p className="text-2xl md:text-3xl font-medium tracking-tighter text-gray-300 max-w-[600px]">
            Hey  {" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 mr-2">
              Spartans!
            </span>
          </p>
          <Image
            src="/shoot.gif"
            height={50}
            width={50}
            alt="repeat"
            unoptimized
            className="md:w-[40px] md:h-auto h-auto"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p className="text-base md:text-xl text-gray-200 my-3 md:my-5 max-w-[600px]" variants={fadeInUp}>
          Halo! Its divine wind will rush through the stars, propelling all who are worthy along the path to salvation.
        </motion.p>

        {/* Discord Button */}
        <motion.div
          className="text-base md:text-md flex justify-center mt-2"
          variants={fadeInUp}
        >
          <a
            href="https://discord.gg/Ht7fCcpDEg"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <Image
              src="/discord_button.png"
              height={100}
              width={100}
              alt="Discord Button"
              unoptimized
              className="md:w-[200px] md:h-auto h-auto"
            />
          </a>
        </motion.div>

        {/* X Button */}
        <motion.div
          className="text-base md:text-md flex justify-center mt-5"
          variants={fadeInUp}
        >
          <a
            href="https://x.com/Haloonsei"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <Image
              src="/x_button.png"
              height={100}
              width={100}
              alt="X Button"
              unoptimized
              className="md:w-[200px] md:h-auto h-auto"
            />
          </a>
        </motion.div>

        {/* Telegram Button */}
        <motion.div
          className="text-base md:text-md flex justify-center mt-5"
          variants={fadeInUp}
        >
          <a
            href="https://t.me/+4lliH72PUIQzZTIx"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <Image
              src="/telegram_button.png"
              height={100}
              width={100}
              alt="Telegram Button"
              unoptimized
              className="md:w-[200px] md:h-auto h-auto"
            />
          </a>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Banner;