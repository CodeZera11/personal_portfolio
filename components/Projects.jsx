import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div id="projects" className="w-full bg-gray-600 border-t-2 border-black">
        <div className="max-w-[1240px] mx-auto p-2 py-16 mt-10">
          <h2 className="uppercase cool-link tracking-widest text-2xl">
            Projects
          </h2>
          <h1 className="text-4xl text-extrabold mt-4 text-[#4CC966]">
            What I&apos;ve built
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <Project title={"Ecommerce Store"} img={"ecommerce"} />
            <Project title={"Net Info"} img={"netinfo"} />
            <Project title={"Promptopia"} img={"promptopia"} />
            <Project title={"Youtube Clone"} img={"ytclone"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
