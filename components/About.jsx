import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="mt-10 sm:mt-0 sm:h-[100vh] flex items-center bg-primary-black "
      >
        {/* <div className="absolute w-[80%] opacity-60  inset-8 gradient-04" /> */}
        <div className=" flex items-center justify-center flex-col">
          <div className="px-5">
            <h2 className="tracking-widest text-2xl text-bold text-gray-200">
              <span className="cool-link ">ABOUT ME</span>
            </h2>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mt-5 text-[#4CC966]">
            WHO I AM
          </h1>
          <div className="px-5 mt-3 text-[12px] md:text-[16px] text-[#D4D4D6]">
            &#47;&#47; Building bridges between imagination and technology
          </div>
          <div className="px-2 md:px-12 mt-3 w-[100%] md:w-[90%]">
            <p className="text-center text-[8px] sm:text-[10px] text-gray-300 md:text-[15px]">
              Hello! I&apos;m{" "}
              <span className="text-[#4CC966]">Bhavesh Yadav</span>, a
              passionate, experienced and skilled full-stack web developer with
              expertise in HTML, CSS, JavaScript, ReactJS,
              <br /> Next.js, Node.js, Express, MongoDB, and Git. At 21 years
              old, I&apos;ve already gained substantial experience in developing
              dynamic and user-friendly websites. <br />
              <br />
              Throughout my journey, I have successfully completed numerous
              personal projects that have allowed me to sharpen my skills and
              expand my knowledge of web development. These projects have not
              only showcased my ability to create visually appealing interfaces
              but also demonstrated my proficiency in implementing complex
              functionalities using cutting-edge technologies. <br /> <br />
              Driven by a love for problem-solving and creating seamless user
              experiences, I am constantly seeking opportunities to enhance my
              skills and stay up-to-date with industry trends. I strive to write
              clean and efficient code while following best practices and
              standards. Collaboration and teamwork are integral parts of my
              work ethic, and I thrive in environments where I can contribute my
              ideas and learn from others.
              <br />
              <br /> I am adept at communicating technical concepts to both
              technical and non-technical stakeholders, ensuring a smooth
              workflow and successful project outcomes. As a full-stack web
              developer, I am motivated to tackle new challenges and make a
              positive impact through innovative solutions. I am excited to
              continue my growth in this fast-paced field and contribute my
              skills to meaningful projects. Thank you for taking the time to
              learn a bit about me. I look forward to connecting and
              collaborating on exciting web development ventures!
            </p>
          </div>
          <div className="mt-10 underline cursor-pointer">
            <Link
              href={"https://linktr.ee/codezera3"}
              className="text-[10px] md:text-[12px] text-[#D4D4D6]"
              target="_blank"
            >
              Check out some of my latest projects here
            </Link>
          </div>

          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default About;
