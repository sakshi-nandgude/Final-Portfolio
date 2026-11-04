import { navItems } from "./data/profile.js";
import useActiveSection from "./hooks/useActiveSection.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Leadership from "./components/Leadership.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const sectionIds = navItems.map((n) => n.id);

export default function App() {
  const active = useActiveSection(sectionIds);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header active={active} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
