import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = ({ title, img, website, code }) => {
  //

  return (
    <div
      id="project"
      className="mt-10 relative flex items-center w-full h-auto justify-center shadow-2xl shadow-gray-900 group rounded-xl p-4 hover:bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]"
    >
      <Image
        className="rounded-xl group-hover:opacity-10 group-hover:rounded-xl"
        src={`/static/projects/${img}.png`}
        alt="ecommerce store"
        width={1000}
        height={1000}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-bold text-4xl tracking-widest text-secondary-white text-center">
          {title}
        </h2>
        <div className="flex gap-5 items-center mt-5">
          <Link
            href={code ? code : ""}
            target="_blank"
            className="flex items-center justify-center w-[200px] rounded-lg cursor-pointer px-3 py-1 bg-black text-white text-center hover:bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] ease-in duration-200"
          >
            View Code
          </Link>
          <Link
            href={website ? website : ""}
            target="_blank"
            className="flex items-center justify-center w-[200px] rounded-lg cursor-pointer px-3 py-1 bg-black text-white text-center hover:bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] ease-in duration-200"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
