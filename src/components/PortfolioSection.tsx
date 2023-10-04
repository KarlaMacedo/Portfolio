import React from 'react';
import PorfolioCard from './PorfolioCard';

// Importa las imágenes de tus Porfolios
import Porfolio1Image from '../assets/imgs/1.jpg';
import Porfolio2Image from '../assets/imgs/2.jpg';
import Porfolio3Image from '../assets/imgs/3.jpg';

const PorfolioSection: React.FC = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h2 className="mb-5">
          Latest <span className="text-danger">News</span>
        </h2>
        <div className="row">
          <PorfolioCard
            title="Consectetur adipisicing elit"
            author="Admin"
            likes={234}
            comments={123}
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio."
            imageSrc={Porfolio1Image}
          />
          <PorfolioCard
            title="Explicabo illo"
            author="Admin"
            likes={456}
            comments={264}
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem."
            imageSrc={Porfolio2Image}
          />
          <PorfolioCard
            title="Porro Quisqua"
            author="Admin"
            likes={431}
            comments={312}
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem."
            imageSrc={Porfolio3Image}
          />
        </div>
      </div>
    </section>
  );
};

export default PorfolioSection;
