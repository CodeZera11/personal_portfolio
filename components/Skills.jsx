"use client";

import { fetchSkills } from "../actions/server-actions";
// import Image from "next/image";
import SkillCard from "./SkillCard";
import { useEffect, useState } from "react";
// import { skills } from "../constants";

export const revalidate = 60;

const Skills = () => {
  const [skills, setSkills] = useState(null);

  const getSkills = async () => {
    const data = await fetchSkills();
    setSkills(data);
  };

  useEffect(() => {
    // getSkills();
  }, []);

  return (
    <div id="skills">
      <div className="w-full p-6 flex lg:h-auto bg-primary-black md:p-12 flex-col justify-center">
        <h2 className="tracking-widest text-2xl text-bold">
          <span className="cool-link">SKILLS</span>
        </h2>
        <h1 className="text-4xl text-extrabold mt-4 text-[#4CC966]">
          What I Can Do
        </h1>
        {skills && skills.length > 0 ? (
          <div className="grid mx-auto  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12">
            {skills.map((skill) => (
              <SkillCard
                title={skill.title}
                key={skill.title}
                img={skill.icon}
              />
            ))}
          </div>
        ) : (
          <h1 className="text-center text-white text-2xl p-4">Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Skills;
