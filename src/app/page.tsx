import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

const About = dynamic(() => import("@/components/about"), { ssr: true });
const Experience = dynamic(() => import("@/components/experience"), {
  ssr: true,
});
const Projects = dynamic(() => import("@/components/projects"), { ssr: true });
const Skills = dynamic(() => import("@/components/skills"), { ssr: true });
const Achievements = dynamic(() => import("@/components/achievements"), {
  ssr: true,
});
const Testimonials = dynamic(() => import("@/components/testimonials"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/contact"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
