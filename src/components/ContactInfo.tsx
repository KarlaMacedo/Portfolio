// ContactInfo.tsx
import React from 'react';

const ContactInfo: React.FC = () => {
    return (
      <div className="col-lg-4">
        <div className="contact-info-card">
          <h4 className="contact-title">Ponerse en contacto</h4>
          <div className="row mb-2">
            <div className="col-1 pt-1 mr-1">
              <i className="ti-mobile icon-md"></i>
            </div>
            <div className="col-10 ">
              <h6 className="d-inline">Tléfono : <br /> <span className="text-muted">+ (52) 449 233 39 85</span></h6>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-1 pt-1 mr-1">
              <i className="ti-map-alt icon-md"></i>
            </div>
            <div className="col-10">
              <h6 className="d-inline">Dirección :<br /> <span className="text-muted">Monterrey, Nuevo León, México.</span></h6>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-1 pt-1 mr-1">
              <i className="ti-envelope icon-md"></i>
            </div>
            <div className="col-10">
              <h6 className="d-inline">Email :<br /> <span className="text-muted">kpmacedo9@gmail.com</span></h6>
            </div>
          </div>
          <ul className="social-icons pt-4">
            <li className="social-item"><a className="social-link text-dark" href="https://www.linkedin.com/in/karlapaolamacedo/"><i className="ti-linkedin" aria-hidden="true"></i></a></li>
            <li className="social-item"><a className="social-link text-dark" href="https://github.com/KarlaMacedo"><i className="ti-github" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
    );
  };

export default ContactInfo;
