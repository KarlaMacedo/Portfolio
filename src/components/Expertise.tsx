const Expertise = () => {
  return (
    <div className="col-lg-4 about-card">
      <h3 className="font-weight-light">Mi experiencia</h3>
      <span className="line mb-5"></span>
      <div className="row">
        <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
        <div className="col-10 ml-auto mr-3">
          <h6>Diseño y desarrollo web</h6>
          <p className="subtitle">Centrado en la experiencia de usuario y en el product backlog.</p>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
        <div className="col-10 ml-auto mr-3">
          <h6>Desarrollo de APIs</h6>
          <p className="subtitle">Centrado en el product backlog para una utilidad efectiva en la integración.</p>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
        <div className="col-10 ml-auto mr-3">
          <h6>Manejo y planeación de proyectos</h6>
          <p className="subtitle">Priorizando el product backlog y realizando ciclos de sprints continuos para una buena comunicación, colaboración y mejora continua.</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
