"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import TypewriterComponent from "typewriter-effect";
import { TitleText, TypingText, TypingText2 } from "./CustomText";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../lib/motion";
import styles from "../styles";

const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex gap-20 text-white justify-center mt-40 relative"
    >
      <div className="flex flex-col gap-5 bg-red-400">
        <h1 className="text-8xl text-white font-extralight">Welcome.</h1>
        <div className="flex flex-col gap-2">
          <p className="max-w-xl text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            accusantium, magni nulla molestiae quae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dicta, debitis.
          </p>
          <p className="max-w-xl text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            accusantium, magni nulla molestiae quae.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-4xl text-white">See My</h3>
        <div>
          <ul>
            <li>Skills</li>
            <li>Projects</li>
            <li>Certificates</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
