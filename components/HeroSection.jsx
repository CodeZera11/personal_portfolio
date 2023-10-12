"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import TypewriterComponent from "typewriter-effect";
import { TitleText, TypingText, TypingText2 } from "./CustomText";
import { motion } from "framer-motion";
import {
  container,
  fadeIn,
  section_variant,
  slideIn,
  staggerContainer,
  textVariant,
} from "../lib/motion";
import styles from "../styles";
import Image from "next/image";

const sections = [
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Certificates",
    link: "#certificates",
  },
];

const HeroSection = () => {
  return (
    <section className="h-auto lg:h-[92vh] bg-primary-black w-full flex justify-center relative">
      <div className="absolute w-[80%] z-0 opacity-30 inset-1 gradient-02" />
      <div className="flex flex-col lg:flex-row items-center justify-center py-8">
        <div className="flex flex-col lg:flex-row items-center sm:px-10 sm:py-20 lg:p-20  gap-8 lg:gap-28 lg:m-44">
          <div className="flex flex-col gap-5 p-5 lg:w-1/2">
            <motion.h1
              variants={fadeIn("up", "spring", 0.1, 1)}
              initial="hidden"
              animate="show"
              className="text-5xl sm:text-8xl text-white text-center lg:text-start font-extralight lg:-ml-4"
            >
              Welcome.
            </motion.h1>

            <div className="flex gap-5">
              <motion.div
                variants={fadeIn("right", "tween", 0.5, 0.5)}
                initial="hidden"
                whileInView="show"
                className="h-auto bg-emerald-400 w-3 rounded-full"
              />
              <div className="">
                <TypingText
                  title={
                    "Hello there! I'm a passionate and experienced full stack developer ready to take your digital projects to new heights. With expertise in both front-end and back-end development, I bring a holistic approach to crafting robust and user-friendly web applications. "
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex items-start flex-col gap-5 lg:gap-10 w-full px-10 lg:px-0 z-10">
            <div className="flex flex-col gap-2 lg:gap-4 ">
              <motion.h3
                variants={fadeIn("left", "tween", 0.5, 0.5)}
                initial="hidden"
                animate="show"
                className="text-2xl lg:text-5xl tracking-wide text-white"
              >
                Check Out My
              </motion.h3>
              <motion.div
                variants={fadeIn("up", "tween", 0.5, 0.5)}
                initial="hidden"
                whileInView="show"
                className="bg-emerald-400 h-1 w-[100px] lg:w-[150px] rounded-full ml-1"
              />
            </div>
            <div className="">
              <motion.ul
                variants={container(1, 0.2)}
                initial="hidden"
                whileInView="show"
                className="flex flex-col lg:flex-row gap-3 lg:gap-10  text-white"
              >
                {sections.map((section) => (
                  <motion.li
                    key={section.link}
                    variants={section_variant}
                    whileHover={{ scale: 1.2 }}
                    className="font-extralight text-xl lg:text-2xl hover:text-emerald-400 cursor-pointer"
                  >
                    <Link href={section.link}>{section.title}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
