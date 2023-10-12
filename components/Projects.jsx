import React from "react";
import Project from "./Project";
import { projects } from "../constants";

const Projects = () => {
  return (
    <>
      <div id="projects" className="w-full bg-primary-black  relative">
        <div className="absolute w-[80%] opacity-30 z-0  inset-1 gradient-01" />
        <div className="max-w-[1240px] mx-auto p-2 z-100 py-16 mt-10">
          <h2 className="uppercase cool-link tracking-widest text-2xl">
            Projects
          </h2>
          <h1 className="text-4xl text-extrabold mt-4 text-[#4CC966]">
            What I&apos;ve built
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Project title={project.title} img={project.img} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
