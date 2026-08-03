import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import ResumeTemplate from "@/components/ResumeTemplate";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Credentials />
      </main>
      <Contact />
      <div className="resume-offscreen" aria-hidden="true">
        <ResumeTemplate />
      </div>
    </>
  );
}
