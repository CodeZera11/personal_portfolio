import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
    </>
  );
}
