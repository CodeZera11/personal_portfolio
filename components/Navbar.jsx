"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import useDownloader from "react-use-downloader";
import { motion } from "framer-motion";
import { fadeIn, navVariants } from "../lib/motion";
import styles from "../styles";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  const toggleNav = () => {
    setSideNav(!sideNav);
  };

  const { download } = useDownloader();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`relative px-10 pt-10`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />

      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}
      >
        <h1 className="font-extrabold text-white text-[24px] leading-[30.24px]">
          Bhavesh&apos; Portfolio
        </h1>
        <Menu size={24} className="text-white" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
