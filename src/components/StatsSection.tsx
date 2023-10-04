// StatsSection.tsx
import React from 'react';
import StatItem from './StatItem';

const StatsSection: React.FC = () => {
  return (
    <section className="section bg-dark text-center">
      <div className="container">
        <div className="row text-center">
          <StatItem iconClass="ti-alarm-clock icon-xl" value="7" description="Months Worked" />
          <StatItem iconClass="ti-layers-alt icon-xl" value="5" description="Projects Finished" />
          <StatItem iconClass="ti-heart-broken icon-xl" value="2" description="Projects In Progress" />
          <StatItem iconClass="ti-face-smile icon-xl" value="3" description="Work Partners" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
