import Image from "next/image";
import React from "react";

const SkillCard = ({ title, img }) => {
  return (
    <>
      <div className="flex items-center justify-between p-5 border rounded-xl shadow-lg shadow-green-900 hover:scale-105 ease-in duration-200 border-black bg-primary-black w-[300px] h-[100px]">
        <div className="">
          <Image src={img} width={64} height={64} alt={img} />
        </div>
        <h1 className="text-2xl text-[#f4f4f5]">{title}</h1>
      </div>
    </>
  );
};

export default SkillCard;
