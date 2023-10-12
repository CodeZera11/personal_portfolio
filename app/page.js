import About from "../components/About";
import Certifications from "../components/Certificates";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-x-hidden flex flex-col ">
      <Navbar />
      <HeroSection />
      <div className="h-0.5 w-full bg-gray-300" />
      <About />
      {/* <div className="gradient-03 z-0 opacity-30" /> */}
      <Skills />
      {/* <div className="gradient-04 z-0 opacity-20" /> */}
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
