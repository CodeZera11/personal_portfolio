import Image from "next/image";
import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "@/constants";

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
          {skills.map((skill) => (
            <SkillCard name={skill.title} key={skill.title} img={skill.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
