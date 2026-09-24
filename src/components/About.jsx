import { useState } from "react";

function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section id="sobre-mi">
      <h2>Sobre mí</h2>

      <p>
        Soy estudiante de programación y actualmente estoy aprendiendo
        desarrollo web con tecnologías como HTML, CSS, JavaScript y React.
      </p>

      {mostrarMas && (
        <p>
          Mi objetivo es seguir desarrollando mis conocimientos, crear
          proyectos propios y adquirir experiencia en el desarrollo de
          aplicaciones web.
        </p>
      )}

      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Ver menos" : "Ver más"}
      </button>
    </section>
  );
}

export default About;