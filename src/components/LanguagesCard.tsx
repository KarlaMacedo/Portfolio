
const LanguagesCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="pull-left">
          <h4 className="mt-2">Idiomas</h4>
          <span className="line"></span>
        </div>
      </div>
      <div className="card-body pb-2">
        <h6>Español (Nativo)</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <h6>Inglés (B1)</h6>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesCard;
