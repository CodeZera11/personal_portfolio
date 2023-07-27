"use client";

import SkillCard from "@/components/SkillCard";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { projectdetail } from "@/constants";

const Projectinfo = ({ params }) => {
  const slug = params.slug;

  const [project, setProject] = useState({
    slug: "",
    title: "",
    tagline: "",
    description: "",
    website: "",
    code: "",
    technologies: [],
  });

  useEffect(() => {
    projectdetail.map((project) => {
      if (project.slug === slug) {
        setProject(project);
      }
    });
  }, [slug]);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-700">
        {/* Bg-image and info */}
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={`/static/projects/${project.slug}.png`}
            alt="/"
          />
          <div className="absolute z-10 top-[60%] left-[50%] w-full translate-x-[-50%] text-center translate-y-[-50%]">
            <Link target="_blank" href={project.website}>
              <h1 className="text-4xl text-white cool-link-nav cursor-pointer">
                {project.title}
              </h1>
            </Link>
            <p className="text-xs md:text-sm mt-2 uppercase text-gray-400">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Headers */}
        <div className="px-6 pt-6 lg:px-12 lg:pt-12">
          <h2 className="tracking-widest text-lg md:text-2xl text-bold">
            <span className="text-[#4CC966]">PROJECT</span>
          </h2>
          <h1 className="text-xl cool-link md:text-4xl tracking-wider text-extrabold md:mt-10 ">
            OVERVIEW
          </h1>
        </div>

        {/* Project Info */}
        <div className="w-full text-center mt-10">
          <p className="w-[90%] mx-auto">{project.description}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-7  sm:gap-15 lg:gap-20 mt-12">
          <Link
            target="_blank"
            href={project.website}
            className="p-2  lg:p-4 button-1 rounded-2xl"
          >
            Visit Website
          </Link>
          <Link
            target="_blank"
            href={project.code}
            className="p-2 lg:p-4 button-1 rounded-2xl"
          >
            View Code
          </Link>
        </div>

        {/* Technologies Used */}
        <div className=" flex px-6 pt-6 lg:px-12 lg:pt-12">
          <h1 className="text-xl md:text-4xl tracking-wider text-extrabold md:mt-4 cool-link">
            Technologies used
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 pt-6 lg:px-12 lg:pt-12 pb-12">
          {project.technologies.map((technology, index) => {
            // console.log(technology.title);
            return (
              <SkillCard
                key={index}
                title={technology.title}
                img={technology.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projectinfo;
