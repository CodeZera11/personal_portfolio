import React from "react";
import { certificates } from "../constants";
import Certificate from "./Certificate";

const Certifications = () => {
  return (
    <>
      <div
        id="projects"
        className="w-full bg-[#24272D] border-t-2 border-black"
      >
        <div className="max-w-[1240px] mx-auto p-2 py-16 mt-10">
          <h2 className="uppercase cool-link tracking-widest text-2xl">
            Certifications
          </h2>
          <h1 className="text-4xl text-extrabold mt-4 text-[#4CC966]">
            What I&apos;ve Learned
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((certificate, index) => (
              <Certificate
                title={certificate.title}
                img={certificate.img}
                link={certificate.link}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
