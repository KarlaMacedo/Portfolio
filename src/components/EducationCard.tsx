
const EducationCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="mt-2">
          <h4>Educación</h4>
          <span className="line"></span>
        </div>
      </div>
      <div className="card-body">
        <h6 className="title text-danger">Abril - Septiembre 2023</h6>
        <p>Especialización en Desarrollo Web Front-End</p>
        <p className="subtitle">Iniciar mi autoaprendizaje en JavaScript, HTML, CSS, React, Firebase, Git, Github, MongoDB, Docker, Jest, etc., para desarrollar diversos proyectos centrados en el product backlog basado en historias de usuario.</p>
        <hr />
        <h6 className="title text-danger">2020 - 2023</h6>
        <p>Maestría en Conservación, Fauna Silvestre y Sustentabilidad (Mención Honorífica)</p>
        <p className="subtitle">Sin presupuesto para mi proyecto de tesis, logré coordinar el trabajo de campo que se requirió para la obtención de la data e incursioné en el autoaprendizaje del lenguaje de programación R, para desarrollar por primera vez un estudio sobre la ocupación y los patrones de actividad del jaguar en Montemorelos, Nuevo León.</p>
        <hr />
        <h6 className="title text-danger">2013 - 2018</h6>
        <p>Licenciatura en Biología (Mención Honorífica)</p>
        <p className="subtitle">Sin poder contar con el apoyo económico de mis padres para solventar los gastos de mis estudios, trabajé, fui instructor beca por 2 años y logré obtener distintos apoyos económicos por parte de Gobierno del Estado y el Conacyt gracias a mi buen desempeño escolar, con los cuales pude culminarlos satisfactoriamente.</p>
      </div>
    </div>
  );
};

export default EducationCard;
