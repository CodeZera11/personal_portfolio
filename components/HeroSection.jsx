"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div id="hero" className="w-full h-screen">
      <div className="w-full bg-gray-700 h-full flex items-center justify-center text-2xl flex-col">
        <div>
          <h2 className="tracking-widest text-sm md:text-lg text-gray-900">
            {"Let's Build Something Together"}
          </h2>
        </div>
        <div>
          <h1 className="text-lg md:text-5xl font-bold mt-4">
            Hi, I&apos;m <span className="text-[#4CC966]">Bhavesh</span>
          </h1>
        </div>
        <div className="mt-3">
          {/* <h1 className="text-5xl font-bold mt-2">A Full Stack Web Developer</h1> */}
          <Typewriter
            options={{
              strings: ["FULL STACK DEVELOPER"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="mt-10 w-[100%] lg:w-[70%] lg:mx-auto">
          <p className="text-[12px] sm:text-[14px] text-center">
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
              href={"/"}
              className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2 text-5xl"
            >
              <BsGithub color="#4CC966" size={40} />
            </Link>
            <Link
              href={"/"}
              className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
            >
              <BiLogoLinkedin color="#4CC966" size={40} />
            </Link>
            <Link
              href={"/"}
              className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
            >
              <AiOutlineMail color="#4CC966" size={40} />
            </Link>
            <Link
              href={"/"}
              className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
            >
              <BsTwitter color="#4CC966" size={40} />
            </Link>
            <Link
              href={"/"}
              className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
            >
              <IoIosContact color="#4CC966" size={40} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
