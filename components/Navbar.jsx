"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosContact } from "react-icons/io";
import useDownloader from "react-use-downloader";
import { motion } from "framer-motion";
import { container, fadeIn, navVariants, section_variant } from "../lib/motion";
import styles from "../styles";
import { Github, Linkedin, Menu, Twitter } from "lucide-react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

const socials = [
  {
    icon: "/github",
    text: "Github",
  },
  {
    icon: "/twitter",
    text: "Twitter",
  },
  {
    icon: "/linkedin",
    text: "Linkedin",
  },
];

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
      className={`px-10 pt-10 w-full`}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col sm:flex-row justify-between gap-8 items-center z-10`}
      >
        <Link
          href={"/"}
          className="font-extrabold text-white text-[30px] sm:text-[24px] tracking-wide"
        >
          Bhavesh&apos; Portfolio
        </Link>
        <motion.div
          variants={container(0.5, 0.15)}
          initial="hidden"
          whileInView="show"
          className="flex gap-8"
        >
          <motion.div
            variants={section_variant}
            whileHover={{ scale: 1.5 }}
            className="cursor-pointer"
          >
            <Link href={"https://github.com/CodeZera11"} target="_blank">
              <BsGithub size={30} className="text-white" />
            </Link>
          </motion.div>
          <motion.div
            variants={section_variant}
            whileHover={{ scale: 1.5 }}
            className="cursor-pointer"
          >
            <Link href={"https://twitter.com/yadav_bhavesh73"} target="_blank">
              <Twitter size={30} className="text-white" />
            </Link>
          </motion.div>
          <motion.div
            variants={section_variant}
            whileHover={{ scale: 1.5 }}
            className="cursor-pointer"
          >
            <Link
              href={"https://www.linkedin.com/in/bhavesh-yadav-0759b2216/"}
              target="_blank"
            >
              <Linkedin size={30} className="text-white " />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
