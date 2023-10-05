import React from 'react';

interface PorfolioCardProps {
  mode: string;
  author: string;
  time: number;
  estimate: number;
  content: string;
  imageSrc: string;
  deploy: string;
  code: string;
}

const PorfolioCard: React.FC<PorfolioCardProps> = ({
  mode,
  author,
  time,
  estimate,
  content,
  imageSrc,
  deploy,
  code,
}) => {
  return (
    <div className="Porfolio-card">
      <div className="img-holder">
        <img src={imageSrc} alt="Porfolio Image" />
      </div>
      <div className="content-holder">
        <h6 className="title">{mode}</h6>
        <p className="post-details">
          <a href="#">{author}</a>
          <a href="#">
            <i className="ti-alarm-clock text-danger"></i> Desarrollado en {time} sprints
          </a>
          <a href="#">
            <i className="ti-stats-up text-danger"></i> Estimado para {estimate} sprints
          </a>
        </p>
        <p>{content}</p>
        <div className="post-details">
          <a href={deploy} className="read-more text-danger">
            Ver el proyecto <i className="ti-angle-double-right"></i>
          </a>
          <a href={code} className="read-more text-danger">
            Ver el código <i className="ti-angle-double-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PorfolioCard;
