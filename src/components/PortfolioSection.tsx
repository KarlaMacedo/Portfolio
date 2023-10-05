import React from 'react';
import PorfolioCard from './PorfolioCard';

// Importa las imágenes de tus Porfolios
import Porfolio7 from '../assets/imgs/P7.jpg';
import Porfolio6 from '../assets/imgs/P6.png';
import Porfolio5 from '../assets/imgs/P5.png';
import Porfolio4 from '../assets/imgs/P4.png';
import Porfolio3 from '../assets/imgs/P3.png';
import Porfolio2 from '../assets/imgs/P2.png';
import Porfolio1 from '../assets/imgs/P1.png';

const PorfolioSection: React.FC = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h2 className="mb-5">
          Mis <span className="text-danger">Proyectos</span> <span className="text-mini"> (Sprint = 1 semana) <i className="ti-alarm-clock text-danger"></i></span>
        </h2>
        <div className="row">
          <PorfolioCard
            mode="Burger Queen API"
            author="Equipo"
            time={4}
            estimate={5}
            content="API desarrollada para gestionar la base de datos de un restaurante (usuarios, productos y pedidos). Este proyecto actualmente se encuentra en proceso de ser conectado con el área de Fron-end (Burger Queen API Client)."
            imageSrc={Porfolio7}
            deploy='https://burger-queen-api-zvby-dev.fl0.io'
            code='https://github.com/KarlaMacedo/Burger-queen-api'
          />
          <PorfolioCard
            mode="Burger Queen API Client"
            author="Equipo"
            time={4}
            estimate={5}
            content="En este proyecto el usuario puede tomar pedidos (mesero), enviarlos al área de preparación (chef) y hacer el manejo de usuarios y productos (administrador), todo esto conectado a una API."
            imageSrc={Porfolio6}
            deploy='https://burger-queen-api-client-psi.vercel.app'
            code='https://github.com/KarlaMacedo/Burger-queen-api-client'
          />
          <PorfolioCard
            mode="Markdown links"
            author="Individual"
            time={2.5}
            estimate={5}
            content="Librería disponible en npm con la cual el usuario puede buscar archivos .md, buscar links que se encuentren dentro de éstos, validarlos por HTTP request y obtener estadísticas sobre éstos."
            imageSrc={Porfolio5}
            deploy='https://www.npmjs.com/package/karlamacedo-md-links'
            code='https://github.com/KarlaMacedo/md-links'
          />
          <PorfolioCard
            mode="Social network - Rockbook"
            author="Equipo"
            time={6}
            estimate={5}
            content="En este proyecto el usuario puede ser parte de una red social en la que puede publicar post con texto, imágenes y ubicaciones. Se puede acceder por Facebook, Google o por registro de mail y contraseña."
            imageSrc={Porfolio4}
            deploy='https://rockbook-a84e0.firebaseapp.com'
            code='https://github.com/KarlaMacedo/social-network'
          />
          <PorfolioCard
            mode="Data lovers - Game of thrones"
            author="Equipo"
            time={4}
            estimate={4}
            content="En este proyecto el usuario puede encontrar información de la serie, sobre los personajes y familias mediante secciones, buscador o filtros de búsqueda."
            imageSrc={Porfolio3}
            deploy='https://karlamacedo.github.io/data-lovers/src/'
            code='https://github.com/KarlaMacedo/data-lovers'
          />
          <PorfolioCard
            mode="Card validation - DoggyCare"
            author="Individual"
            time={2}
            estimate={3}
            content="En este proyecto el usuario puede validar su número de tarjeta  por medio del algoritmo de Luhn para procesar su pago de servicios."
            imageSrc={Porfolio2}
            deploy='https://karlamacedo.github.io/card-validation/src/'
            code='https://github.com/KarlaMacedo/card-validation'
          />
          <PorfolioCard
            mode="Trivia - Laboratoria"
            author="Equipo"
            time={1}
            estimate={1}
            content="En este proyecto el usuario puede encontrar preguntas sobre el bootcamp de Laboratoria y contabilizar sus aciertos. Se elaboró en un sprint de 3 días como parte de la admisión al bootcamp de Laboratoria"
            imageSrc={Porfolio1}
            deploy='https://karlamacedo.github.io/Quiz/'
            code='https://github.com/KarlaMacedo/Quiz'
          />
        </div>
      </div>
    </section>
  );
};

export default PorfolioSection;
