// import Experience from "../../components/Experience/Experience";
import Services from "../Services/Services";
// import Skills from "../Skills/Skills";
import Hero from "./Hero";
import Projects from "../../components/Projects/Projects";
import Footer from "../Contact/Contact";
import Experience from "../../components/Experience/Experience";
// import About from "../About/About";
const Home = () => {
  return (
    <main>
      <section id="home" className="scroll-mt-25">
        <Hero />
      </section>

      {/* <section id="about">
        <About />
      </section> */}

      <section id="services" className="scroll-mt-26">
        <Services />
      </section>

      <section id="experience" className="scroll-mt-25">
        <Experience />
      </section>

      <section id="projects" className="scroll-mt-25">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-25">
        <Footer />
      </section>
    </main>
  );
};
export default Home;
