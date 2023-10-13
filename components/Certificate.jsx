import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certificate = ({ title, image, link }) => {
  return (
    <div
      id="certificates"
      className="mt-10 relative flex items-center w-full h-auto justify-center shadow-2xl shadow-gray-900 group rounded-xl p-4 hover:bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]"
    >
      <Image
        className="rounded-xl group-hover:opacity-10 opacity-100 group-hover:rounded-xl"
        src={image}
        alt={title}
        width={1000}
        height={1000}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h2 className="text-bold text-2xl tracking-widest text-gray-400 text-center ">
          {title}
        </h2>
        <Link
          target="_blank"
          href={link}
          className="flex items-center justify-center w-[200px] rounded-lg cursor-pointer px-3 py-1 bg-black text-white text-center mx-auto my-2 hover:bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] ease-in duration-200 "
        >
          View Certificate
        </Link>
      </div>
    </div>
  );
};

export default Certificate;
