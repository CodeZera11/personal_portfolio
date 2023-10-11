"use client";

import { textContainer, textVariant2 } from "../lib/motion";
import { motion } from "framer-motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer(0.2)}
    className={`font-normal ${textStyles} text-[#C7C7C7] text-[14px]`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyles} mt-[8px] font-bold md:text-[64px] text-white`}
  >
    {title}
  </motion.h2>
);
