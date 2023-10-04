
const SkillsCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="pull-left">
          <h4 className="mt-2">Skills</h4>
          <span className="line"></span>
        </div>
      </div>
      <div className="card-body pb-2">
        <h6>JavaScript</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '70%' }} aria-valuenow={97} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <h6>HTML5 &amp; CSS3</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '70%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <h6>React</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '55%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <h6>Jest</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '55%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <h6>NodeJs</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '55%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <h6>MongoDB</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <h6>Firebase</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <h6>Docker</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <h6>Planificación, organización y manejo de tiempo</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <h6>Trabajo colaborativo y ágil (SCRUM)</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <h6>Creatividad y gestión de proyectos</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
