"use client";

import { textContainer, textVariant2 } from "../lib/motion";
import { motion } from "framer-motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer(0.5, 0.001)}
    initial="hidden"
    whileInView="show"
    className={`font-normal ${textStyles} text-center text-[#C7C7C7] text-[16px]`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h1
    variants={textContainer(0.1)}
    initial="hidden"
    whileInView="show"
    className={`${textStyles} text-8xl text-white text-start font-extralight -ml-4`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span key={index} variants={textVariant2}>
        {letter}
      </motion.span>
    ))}
  </motion.h1>
);
