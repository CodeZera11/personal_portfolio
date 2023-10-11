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
    // <motion.div
    //   id="hero"
    //   variants={staggerContainer}
    //   initial="hidden"
    //   whileInView="show"
    //   viewport={{ once: false, amount: 0.25 }}
    //   className=" text-white justify-center relative h-screen "
    // >
    //   <div className=" w-full flex gap-20 items-center mt-40 justify-center">
    //     <div className="flex flex-col items-center gap-5 w-1/2">
    //       <h1 className="text-8xl text-white font-extralight">Welcome.</h1>
    //       <div className="flex flex-col gap-2">
    //         <p className="max-w-xl text-xs">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //           Cupiditate, accusantium, magni nulla molestiae quae. Lorem ipsum
    //           dolor sit amet consectetur adipisicing elit. Dicta, debitis.
    //         </p>
    //         <p className="max-w-xl text-xs">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //           Cupiditate, accusantium, magni nulla molestiae quae.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-5 w-1/2">
    // <h3 className="text-4xl text-white">See My</h3>
    // <div>
    //   <ul>
    //     <li>Skills</li>
    //     <li>Projects</li>
    //     <li>Certificates</li>
    //   </ul>
    // </div>
    //     </div>
    //   </div>
    // </motion.div>

    <section className="h-[92vh] w-full flex justify-center ">
      <div className="flex items-center gap-40 ">
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-8xl text-white text-start font-extralight -ml-4">
            Welcome.
          </h1>
          <div className="flex flex-col gap-2">
            <p className="max-w-xl text-md text-gray-300 font-extralight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, accusantium, magni nulla molestiae quae. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dicta, debitis.
            </p>
            <p className="max-w-xl text-md text-gray-300 font-extralight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, accusantium, magni nulla molestiae quae.
            </p>
          </div>
        </div>
        <div className="flex items-start flex-col gap-10 ">
          <h3 className="text-5xl tracking-wide text-white">Check Out My</h3>
          <div className="">
            <ul className="flex flex-col gap-4 text-2xl text-white">
              <li>Skills</li>
              <li>Projects</li>
              <li>Certificates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
