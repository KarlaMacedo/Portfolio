
const ExpertiseCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="mt-2">
          <h4>Experiencia laboral previa</h4>
          <span className="line"></span>
        </div>
      </div>
      <div className="card-body">
        <h6 className="title text-danger">Abril - Septiembre 2023</h6>
        <p>Desarrolladora Front-end en Laboratoria</p>
        <p className="subtitle">Ambiente laboral simulado bajo la metodología SCRUM, donde logré desarrollar 7 proyectos, de los cuales 4 los logré culminar exitosamente antes de la fecha prevista.</p>
        <hr />
        <h6 className="title text-danger">2022</h6>
        <p>Estancia de Investigación en Parque Ecológico Chipinque A.B.P.</p>
        <p className="subtitle">Implementé metodología de monitoreo de fauna para analizarla por medio del lenguaje de programación de R.</p>
        <hr />
        <h6 className="title text-danger">2022</h6>
        <p>Coordinadora de Proyecto en WWF México</p>
        <p className="subtitle">Coordiné censo en Nuevo León de más de 100 personas relacionadas con el tema de los 7 municipios en los que se distribuye el jaguar.</p>
        <h6 className="title text-danger">2018 -2020</h6>
        <p>Asistente de Ortodoncista en Ortus Odontología Integral</p>
        <p className="subtitle">Sin conocimientos previos inicié como recepcionista y a los 6 meses ascendí a asistente dental, auxiliando en procedimientos dentales y en la preparación del material para éstos.</p>
      </div>
    </div>
  );
};

export default ExpertiseCard;
