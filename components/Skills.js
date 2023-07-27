import Image from "next/image";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <>
      <div
        id="skills"
        className="w-full p-6 flex lg:h-screen bg-gray-700 md:p-12 flex-col justify-center border-t-2 border-black"
      >
        <h2 className="tracking-widest text-2xl text-bold">
          <span className="cool-link">SKILLS</span>
        </h2>
        <h1 className="text-4xl text-extrabold mt-4 text-[#4CC966]">
          What I Can Do
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          <SkillCard name={"html"} label={"HTML"} />
          <SkillCard name={"css"} label={"CSS"} />
          <SkillCard name={"JS"} label={"JS"} />
          <SkillCard name={"ts"} label={"TS"} />
          <SkillCard name={"tailwind"} label={"Tailwind"} />
          <SkillCard name={"react"} label={"React.js"} />
          <SkillCard name={"nextjs"} label={"Next.js"} />
          <SkillCard name={"nodejs"} label={"Node JS"} />
          <SkillCard name={"expressjs"} label={"Express"} />
          <SkillCard name={"mongodb"} label={"MongoDB"} />
          <SkillCard name={"git"} label={"Git"} />
          <SkillCard name={"github"} label={"GitHub"} />
        </div>
      </div>
    </>
  );
};

export default Skills;
