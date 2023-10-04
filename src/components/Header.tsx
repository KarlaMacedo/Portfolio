
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <ul className="social-icons pt-3">
          <li className="social-item">
            <a className="social-link text-light" href="https://www.linkedin.com/in/karlapaolamacedo/">
              <i className="ti-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li className="social-item">
            <a className="social-link text-light" href="https://github.com/KarlaMacedo">
              <i className="ti-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <div className="header-content">
          <h4 className="header-subtitle">Hola, yo soy</h4>
          <h1 className="header-title">Karla Paola Macedo</h1>
          <h6 className="header-mono">Frond-end Developer</h6>
          <button className="btn btn-primary btn-rounded">
            <i className="ti-printer pr-2"></i>Descarga mi CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
