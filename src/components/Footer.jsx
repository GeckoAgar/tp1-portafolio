function Footer({ email }) {
  return (
    <footer className="site-footer">
      <p>© 2026 Agustin Moretta</p>
      <div className="footer-links">
        <a href={`mailto:${email}`}>Email: {email}</a>
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
      </div>
    </footer>
  );
}

export default Footer;