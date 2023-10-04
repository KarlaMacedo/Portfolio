// StatItem.tsx
import React from 'react';

interface StatItemProps {
  iconClass: string;
  value: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ iconClass, value, description }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="row">
        <div className="col-5 text-right text-light border-right py-3">
          <div className="m-auto"><i className={iconClass}></i></div>
        </div>
        <div className="col-7 text-left py-3">
          <h1 className="text-danger font-weight-bold font40">{value}</h1>
          <p className="text-light mb-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StatItem;
