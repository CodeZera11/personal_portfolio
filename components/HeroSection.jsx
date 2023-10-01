"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import TypewriterComponent from "typewriter-effect";
import { TypingText } from "./CustomText";
import { motion } from "framer-motion";
import { staggerContainer } from "../lib/motion";

const HeroSection = () => {
  return (
    <div id="hero" className="w-full h-screen">
      <motion.div
        variants={staggerContainer}
        className="w-full bg-[#24272D] h-full flex items-center justify-center text-2xl flex-col"
      >
        <div>
          {/* <h2 className="tracking-widest text-sm md:text-lg text-[#D4D4D6]">
            {"Let's Build Something Together"}
          </h2> */}
          <TypingText
            title={"Let's Build Something Together"}
            textStyles="tracking-widest text-sm md:text-lg text-[#D4D4D6]"
          />
        </div>
        <div>
          <h1 className="text-lg md:text-5xl font-bold mt-4 text-[#f4f4f5]">
            Hi, I&apos;m <span className="text-[#4CC966]">Bhavesh</span>
          </h1>
        </div>
        <div className="">
          <div className="text-transparent bg-clip-text bg-green-500 mt-5 text-lg sm:text-lg md:text-xl lg:text-3xl">
            <TypewriterComponent
              options={{
                strings: ["FULL STACK WEB DEVELOPER!"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="mt-10 w-[100%] lg:w-[70%] lg:mx-auto">
          <p className="text-[12px] sm:text-[14px] text-center text-[#D4D4D6]">
            Hello there! I&apos;m a passionate and experienced full stack
            developer ready to take your digital projects to new heights. With
            expertise in both front-end and back-end development, I bring a
            holistic approach to crafting robust and user-friendly web
            applications. From captivating user interfaces to efficient
            server-side functionality, I thrive on creating seamless and
            engaging experiences for users.
          </p>
        </div>

        <div className="links mt-10">
          <div className="flex gap-4 lg:gap-9 md:gap-14 flex-wrap">
            <Link
              target="_blank"
              href={"https://github.com/CodeZera11"}
              className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2 text-5xl"
            >
              <BsGithub color="#4CC966" size={40} />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/bhavesh-yadav-0759b2216/"}
              className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
            >
              <BiLogoLinkedin color="#4CC966" size={40} />
            </Link>
            <Link
              target="_blank"
              href={"mailto:bhaveshy737@gmail.com"}
              className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
            >
              <AiOutlineMail color="#4CC966" size={40} />
            </Link>
            <Link
              target="_blank"
              href={"https://twitter.com/yadav_bhavesh73"}
              className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
            >
              <BsTwitter color="#4CC966" size={40} />
            </Link>
            <Link
              href={"/#contact"}
              className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
            >
              <IoIosContact color="#4CC966" size={40} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
