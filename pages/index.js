import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Work from "./components/Work"; 
import Contact from "./components/Contact";
import Nav from './components/Nav';

export default function Home() {
  return (
    <>
      <Nav/>
      <Main />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}
