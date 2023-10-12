"use client";
import { useEffect, useState } from "react";
import Certificate from "./Certificate";
import { fetchCertificates } from "../actions/server-actions";

export const revalidate = 60;

const Certifications = () => {
  const [certificates, setCertificates] = useState(null);

  const getCertificates = async () => {
    const response = await fetchCertificates();
    setCertificates(response);
  };

  useEffect(() => {
    // getCertificates();
  }, []);

  return (
    <>
      <div
        id="projects"
        className="w-full bg-primary-black border-t-2 border-black relative"
      >
        <div className="absolute w-[80%] opacity-30  inset-1 gradient-01" />
        <div className="max-w-[1240px] mx-auto p-2 py-16 mt-10">
          <h2 className="uppercase cool-link tracking-widest text-2xl">
            Certifications
          </h2>
          <h1 className="text-4xl text-extrabold mt-4 text-[#4CC966]">
            What I&apos;ve Learned
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {certificates && certificates.length > 0 ? (
              certificates.map((certificate, index) => (
                <Certificate
                  title={certificate.title}
                  image={certificate.image}
                  link={certificate.link}
                  key={index}
                />
              ))
            ) : (
              <h1 className="text-center text-white text-2xl p-4">
                Loading...
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
