function Skills() {
  const habilidades = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  return (
    <section id="habilidades">
      <h2>Habilidades</h2>

      <ul>
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;