import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const habilidades = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "Express", "C#", "SQL"];

  const proyectos = [
    {
      title: "Portfolio personal",
      description:
        "Una página personal desarrollada para presentar mis habilidades y proyectos.",
      technologies: "React, JavaScript, CSS, Git, GitHub",
    },
    {
      title: "Sistema de Callcenter",
      description:
        "Proyecto desarrollado para gestionar y organizar información relacionada con llamadas y usuarios de un sistema de atención.",
      technologies: "JavaScript, HTML, CSS, SQL",
    },
    {
      title: "Sistema CRUD",
      description:
        "Aplicación desarrollada para practicar las operaciones de crear, consultar, modificar y eliminar registros utilizando una base de datos.",
      technologies: "C#, SQL Server Express",
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