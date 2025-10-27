import Image from "next/image";
import "./globals.css";
import { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import Experience from "@/components/Experience";
import Projects from "@/components/projects/carousel";
// import Contact from "@/components/Contact";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
