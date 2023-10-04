// AvailabilitySection.tsx
import React from 'react';

const AvailabilitySection: React.FC = () => {
  return (
    <section className="section bg-dark py-5">
      <div className="container text-center">
        <h2 className="text-light mb-5 font-weight-normal">I Am Available For Work</h2>
        <a href="#contact" className="nav-link">
          <button className="btn bg-primary w-lg">Hire me</button>
        </a>
      </div>
    </section>
  );
};

export default AvailabilitySection;
