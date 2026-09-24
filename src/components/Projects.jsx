function Projects({ proyectos }) {
  return (
    <section id="proyectos" className="projects-section section">
      <div className="section-heading">
        <h2>Proyectos</h2>
      </div>

      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <article key={proyecto.title} className="project-card">
            <h3>{proyecto.title}</h3>

            <p>{proyecto.description}</p>

            <p>
              <strong>Tecnologías:</strong> {proyecto.technologies}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;