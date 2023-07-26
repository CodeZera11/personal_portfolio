"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { GrContactInfo } from "react-icons/gr";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  const toggleNav = () => {
    setSideNav(!sideNav);
  };

  return (
    <div className="">
      <div className="fixed w-full bg-black px-10 h-20 items-center flex justify-between shadow-xl shadow-gray-500 ">
        <div className="">
          <p className="text-[#4CC966] text-2xl">Personal Portfolio</p>
        </div>
        <div className="hidden md:flex gap-10 text-xl">
          <ul className="flex gap-10 text-md mr-5 text-[#4CC966]">
            <Link className="hover:border-b" href={"/"}>
              <li>Home</li>
            </Link>
            <Link className="hover:border-b" href={"/"}>
              <li>About</li>
            </Link>
            <Link className="hover:border-b" href={"/"}>
              <li>Skills</li>
            </Link>
            <Link className="hover:border-b" href={"/"}>
              <li>Projects</li>
            </Link>
            <Link className="hover:border-b" href={"/"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div onClick={() => toggleNav()} className="md:hidden">
          <AiOutlineMenu color="#4CC966" />
        </div>
      </div>

      {sideNav && (
        <div
          className={
            "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in"
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
                <Link className="active:text-[#4CC966]" href={"/"}>
                  <li>Home</li>
                </Link>
                <Link className="active:text-[#4CC966]" href={"/"}>
                  <li>About</li>
                </Link>
                <Link className="active:text-[#4CC966]" href={"/"}>
                  <li>Skills</li>
                </Link>
                <Link className="active:text-[#4CC966]" href={"/"}>
                  <li>Projects</li>
                </Link>
                <Link className="active:text-[#4CC966]" href={"/"}>
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
                  href={"/"}
                  className="rounded-full shadow-gray-600 shadow-lg p-2"
                >
                  <BsGithub color="#4CC966" size={25} />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full shadow-gray-600 shadow-lg p-2"
                >
                  <BiLogoLinkedin color="#4CC966" size={25} />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full shadow-gray-600 shadow-lg p-2"
                >
                  <AiOutlineMail color="#4CC966" size={25} />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full shadow-gray-600 shadow-lg p-2"
                >
                  <BsTwitter color="#4CC966" size={25} />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full shadow-gray-600 shadow-lg p-2"
                >
                  <GrContactInfo size={25} />
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
