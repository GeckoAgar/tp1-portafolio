import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const habilidades = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "Express"];

  const proyectos = [
    {
      title: "Portfolio personal",
      description:
        "Una página personal desarrollada para presentar mis habilidades y proyectos.",
      technologies: "React, JavaScript, CSS, Git, GitHub",
    },
    {
      title: "Sistema de gestión",
      description:
        "Proyecto académico para gestionar información y practicar programación.",
      technologies: "JavaScript, HTML, CSS",
    },
  ];

  return (
    <>
      <Header titulo="Portafolio TP 1" />
      <main>
        <Hero />
        <About />
        <Skills habilidades={habilidades} />
        <Projects proyectos={proyectos} />
      </main>
      <Footer email="agustinmoretta2016@gmail.com" />
    </>
  );
}

export default App;