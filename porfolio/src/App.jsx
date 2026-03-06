import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
