import About from "../components/About";
import Certifications from "../components/Certificates";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-primary-black h-screen">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
