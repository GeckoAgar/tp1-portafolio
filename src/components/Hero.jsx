function Hero() {
  return (
    <section id="inicio" className="section hero-section">
      <div className="hero-copy">

        <h2>Agustin Moretta</h2>

        <h3>Estudiante - Tecnicatura en programación</h3>

        <h3>FRT - UTN 2026</h3>

        <p>
          Estoy aprendiendo desarrollo web y construyendo proyectos para mejorar
          mis conocimientos en programación.
        </p>

        <div>
          <a className="primary-button" href="#proyectos">
            Ver mis proyectos
          </a>
          <a className="secondary-button" href="#sobre-mi">
            Conóceme
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;