import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
 <div>
 <NavBar/>
 <Hero/>
 <About/>
 <Skills/>
 <Projects/>
 <Contact/>
 <Footer/>
 </div>
  );
}
