import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-gray-700 h-screen flex items-center justify-center text-2xl flex-col">
      <div>
        <h2 className="tracking-widest text-lg text-gray-900">
          {"Let's Build Something Together"}
        </h2>
      </div>
      <div>
        <h1 className="text-5xl font-bold mt-4">
          Hi, I&apos;m <span className="text-[#4CC966]">Bhavesh</span>
        </h1>
      </div>
      <div className="mt-3">
        <h1 className="text-5xl font-bold mt-2">A Full Stack Web Developer</h1>
      </div>
      <div className="mt-10 w-[70%] mx-auto">
        <p className="text-[16px] text-center">
          Hello there! I&apos;m a passionate and experienced full stack
          developer ready to take your digital projects to new heights. With
          expertise in both front-end and back-end development, I bring a
          holistic approach to crafting robust and user-friendly web
          applications. From captivating user interfaces to efficient
          server-side functionality, I thrive on creating seamless and engaging
          experiences for users.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
