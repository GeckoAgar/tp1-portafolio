import { useState } from "react";

function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section id="sobre-mi" className="about-section section">
      <div className="section-heading">
        <h2>Sobre mí</h2>
      </div>

      <div className="about-content">
        <div>
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

          <button className="about-button" onClick={() => setMostrarMas(!mostrarMas)}>
            {mostrarMas ? "Ver menos" : "Ver más"}
          </button>
        </div>

        <div className="about-panel">
          <p>
            Me interesa combinar lógica, creatividad y resolución de problemas para
            construir soluciones útiles y bien pensadas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;