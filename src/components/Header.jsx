function Header({ titulo }) {
  return (
    <header className="site-header">
      <h1>{titulo}</h1>

      <nav className="site-nav">
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
      </nav>
    </header>
  );
}

export default Header;