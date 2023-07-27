import Image from "next/image";
import React from "react";

const SkillCard = ({ name, label }) => {
  return (
    <>
      <div className="flex items-center justify-between p-5 border rounded-xl shadow-xl shadow-gray-800 hover:scale-105 ease-in duration-200 border-black bg-gray-600">
        <div>
          <Image
            src={`/../public/assets/skills/${name}.png`}
            width={64}
            height={64}
            alt="html"
          />
        </div>
        <h1 className="text-2xl">{label}</h1>
      </div>
    </>
  );
};

export default SkillCard;