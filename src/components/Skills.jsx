function Skills({ habilidades }) {
  return (
    <section id="habilidades" className="skills-section section">
      <div className="section-heading">
        <h2>Habilidades</h2>
      </div>

      <ul className="skills-grid">
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;