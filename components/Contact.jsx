import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-gray-700 border-t-2 border-black">
      <div className="max-w-[1240px] mx-auto p-2 py-16 mt-10">
        <h2 className="uppercase cool-link tracking-widest text-2xl">
          Contact
        </h2>
        <h1 className="text-4xl text-extrabold mt-4 text-[#4CC966]">
          Get In touch
        </h1>

        <div className="grid lg:grid-cols-5 gap-8 mt-5">
          {/* Left */}
          <div className="col-span-2 bg-gray-600 shadow-xl shadow-gray-800 p-8 rounded-xl border-2 border-black">
            <Image
              src={
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              }
              alt="Contact Me"
              width={500}
              height={500}
              className="rounded-xl"
            />

            <h1 className="mt-5 text-3xl font-bold">Bhavesh Yadav</h1>
            <h2 className="text-gray-900">Full Stack Web Developer</h2>
            <p className="mt-5 text-md">
              I am available for freelance or full-time job.
            </p>
            <p className="text-sm">Contact me and let&apos;s talk</p>

            <div className="flex flex-col">
              <h2 className="uppercase mt-10 text-xl tracking-widest">
                Connect With Me
              </h2>
              <div className="flex mt-3 gap-4 lg:gap-9 md:gap-14 flex-wrap">
                <Link
                  href={"/"}
                  className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2 text-5xl"
                >
                  <BsGithub color="#4CC966" size={30} />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
                >
                  <BiLogoLinkedin color="#4CC966" size={30} />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
                >
                  <AiOutlineMail color="#4CC966" size={30} />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
                >
                  <BsTwitter color="#4CC966" size={30} />
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full hover:scale-125 ease-in duration-200 shadow-gray-600 shadow-lg p-2"
                >
                  <IoIosContact color="#4CC966" size={30} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className=" col-span-3 shadow-xl bg-gray-600 shadow-gray-800 p-4 lg:p-8 rounded-xl border-2 border-black">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 w-full gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-700 bg-gray-500"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-700 bg-gray-500"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase">
                      Email
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex bg-gray-500 border-gray-700"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase">
                      Message
                    </label>
                    <textarea
                      rows={7}
                      className="border-2 rounded-lg p-3 flex border-gray-700 bg-gray-500"
                      type="text"
                    />
                  </div>
                </div>

                <div className="text-center mt-10 w-full flex flex-col rounded-xl">
                  <button className="p-2  button-2 rounded-2xl">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
