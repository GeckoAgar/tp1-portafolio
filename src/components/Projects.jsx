function Projects() {
  const proyectos = [
    {
      title: "Portfolio personal",
      description:
        "Una página personal desarrollada para presentar mis habilidades y proyectos.",
      technologies: "React, JavaScript, CSS",
    },
    {
      title: "Sistema de gestión",
      description:
        "Proyecto académico para gestionar información y practicar programación.",
      technologies: "JavaScript, HTML, CSS",
    },
  ];

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