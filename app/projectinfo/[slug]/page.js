import SkillCard from "@/components/SkillCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projectinfo = ({ params }) => {
  const slug = params.slug;
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
            src={"/../public/projects/carhub.png"}
            alt="/"
          />
          <div className="absolute z-10 top-[60%] left-[50%] w-full translate-x-[-50%] text-center translate-y-[-50%]">
            <Link
              target="_blank"
              href={"https://car-showcase-pi-jade.vercel.app/"}
            >
              <h1 className="text-4xl text-white cool-link-nav cursor-pointer">
                Car Hub
              </h1>
            </Link>
            <p className="text-xs md:text-sm mt-2 uppercase text-gray-400">
              Find All your favourite cars at one place
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
          <p className="w-[90%] mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            aspernatur nemo est animi optio autem nostrum doloribus debitis
            ipsum iste facere tempore, veritatis, libero similique ipsa culpa
            dicta soluta praesentium suscipit officia dolorum? Error natus
            soluta iusto temporibus ut fuga neque deserunt aliquid perferendis,
            labore vero et id atque, harum in distinctio blanditiis sed
            repudiandae. Illum neque commodi molestias dolor exercitationem ipsa
            provident inventore ratione doloribus accusamus alias voluptatum
            iusto, labore quae aliquam nisi eveniet, vel impedit tenetur?
            Voluptatibus tempora necessitatibus impedit enim. Quisquam, tempora
            minus amet vel vitae autem illum reiciendis, corporis excepturi,
            sunt neque quibusdam in veritatis doloremque voluptates officia eos
            blanditiis quaerat adipisci! Tempora quidem aperiam, atque iste
            consectetur placeat iusto ullam.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-7  sm:gap-15 lg:gap-20 mt-12">
          <Link
            target="_blank"
            href={"https://car-showcase-pi-jade.vercel.app/"}
            className="p-2  lg:p-4 button-1 rounded-2xl"
          >
            Visit Website
          </Link>
          <Link href={""} className="p-2 lg:p-4 button-1 rounded-2xl">
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

export default projectinfo;
