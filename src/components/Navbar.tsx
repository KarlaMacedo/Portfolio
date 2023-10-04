import perfil from '../assets/imgs/perfil.jpg'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
      <div className="container">
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">Sobre mi</a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">CV resumido</a>
            </li>
          </ul>
          <ul className="navbar-nav brand">
            <img src= {perfil} alt="" className="brand-img" />
            <li className="brand-txt">
              <h5 className="brand-title">Karla Paola Macedo</h5>
              <div className="brand-subtitle">Front-end Developer</div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">Proyectos</a>
            </li>
            <li className="nav-item last-item">
              <a href="#contact" className="nav-link">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
