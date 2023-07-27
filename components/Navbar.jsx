"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  const toggleNav = () => {
    setSideNav(!sideNav);
  };

  return (
    <div>
      <div className="fixed z-[100] w-full bg-black px-10 h-20 items-center flex justify-between shadow-md shadow-black ">
        <div className="">
          <Link href={"/"} className="text-[#4CC966] text-2xl">
            Personal Portfolio
          </Link>
        </div>
        <div className="hidden md:flex gap-10 text-xl">
          <ul className="flex gap-10 text-md mr-5 text-[#4CC966]">
            <Link className="cool-link-nav" href={"/"}>
              <li>Home</li>
            </Link>
            <Link className="cool-link-nav" href={"/#about"}>
              <li>About</li>
            </Link>
            <Link className="cool-link-nav" href={"/#skills"}>
              <li>Skills</li>
            </Link>
            <Link className="cool-link-nav" href={"/#projects"}>
              <li>Projects</li>
            </Link>
            <Link className="cool-link-nav" href={"/#contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div onClick={() => toggleNav()} className="md:hidden">
          <AiOutlineMenu color="#4CC966" size={30} />
        </div>
      </div>

      {sideNav && (
        <div
          className={
            "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in z-[100]"
          }
        >
          <div className="h-screen left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] bg-gray-700">
            <div
              className={
                sideNav
                  ? "top-0 left-0 flex justify-between p-4 md:p-12 ease-in duration-500"
                  : "top-0 left-[-100%] flex justify-between p-4 md:p-12 ease-in duration-500"
              }
            >
              <div className="p-2 text-[#4CC966]">Bhavesh Portfolio</div>

              <div
                onClick={() => toggleNav()}
                className="rounded-full  border border-black shadow-gray-900 shadow-xl p-2 cursor-pointer"
              >
                <AiOutlineClose color="#4CC966" size={20} />
              </div>
            </div>
            <div className="border-b border-[#4CC966] mx-10 text-lg md:text-xl p-2 pb-7">
              <p className="w-[200px] md:w-[400px]">
                Lets <span className="text-[#49a85c]">build</span> something
                great together.
              </p>
            </div>
            <div className="mx-10 p-2 mt-16">
              <ul className="flex flex-col gap-5 uppercase text-lg">
                <Link
                  onClick={() => toggleNav()}
                  className="active:text-[#4CC966]"
                  target="_blank"
                  href={"https://github.com/CodeZera11"}
                >
                  <li>Home</li>
                </Link>
                <Link
                  onClick={() => toggleNav()}
                  className="active:text-[#4CC966]"
                  href={"/#about"}
                >
                  <li>About</li>
                </Link>
                <Link
                  onClick={() => toggleNav()}
                  className="active:text-[#4CC966]"
                  href={"/#skills"}
                >
                  <li>Skills</li>
                </Link>
                <Link
                  onClick={() => toggleNav()}
                  className="active:text-[#4CC966]"
                  href={"/#projects"}
                >
                  <li>Projects</li>
                </Link>
                <Link
                  onClick={() => toggleNav()}
                  className="active:text-[#4CC966]"
                  href={"/#contact"}
                >
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
            <div className="bottom mt-10 md:mt-40 mx-10 flex flex-col">
              <h1 className="font-bold text-lg text-[#4CC966] p-2">
                <span className="border-b border-[#4CC966] w-2">
                  LETS CONNECT
                </span>
              </h1>

              <div className="p-2 flex gap-10 flex-wrap">
                <Link
                  target="_blank"
                  href={"https://github.com/CodeZera11"}
                  className="rounded-full shadow-gray-600 shadow-lg p-2"
                >
                  <BsGithub color="#4CC966" size={25} />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/bhavesh-yadav-0759b2216/"}
                  className="rounded-full shadow-gray-600 shadow-lg p-2"
                >
                  <BiLogoLinkedin color="#4CC966" size={25} />
                </Link>
                <Link
                  target="_blank"
                  href={"mailto:bhaveshy737@gmail.com"}
                  className="rounded-full shadow-gray-600 shadow-lg p-2"
                >
                  <AiOutlineMail color="#4CC966" size={25} />
                </Link>
                <Link
                  target="_blank"
                  href={"https://twitter.com/yadav_bhavesh73"}
                  className="rounded-full shadow-gray-600 shadow-lg p-2"
                >
                  <BsTwitter color="#4CC966" size={25} />
                </Link>
                <Link
                  href={"/#contact"}
                  className="rounded-full shadow-gray-600 shadow-lg p-2"
                >
                  <IoIosContact size={25} color="#4CC966" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
