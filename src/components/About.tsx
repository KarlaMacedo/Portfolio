import Expertise from './Expertise';
import PersonalInfo from './PersonalInfo';
import PDF from '../assets/imgs/CV.pdf'

const About = () => {
  return (
    <div id="about" className="row about-section">
      <div className="col-lg-4 about-card">
        <h3 className="font-weight-light">Quién soy yo ?</h3>
        <span className="line mb-5"></span>
        <h5 className="mb-3">Una apasionada desarrolladora web en constante evolución</h5>
        <p className="mt-20">Quieres conocer más detalles sobre mi perfil?</p>
        <a href={PDF} target="_blank" rel="noopener noreferrer" download="CV.pdf"> 
          <button className="btn btn-outline-danger">
            <i className="icon-down-circled2 "></i>Descarga mi CV
          </button>
        </a>
      </div>
        <PersonalInfo />
        <Expertise />
    </div>
  );
};

export default About;
