import React from 'react';
import './style.css';

// jak dražit

const HowToBid = () => {
  return (
    <div className="container__how-to-bid">
      <div className="how-to-bid__title">Jak dražit</div>
      <div className="how-to-bid__steps">
        <div className="how-to-bid_step">
          <div className="step_icon"></div>
          <div className="step_instructions"></div>
        </div>
        <div className="how-to-bid_step">
          <div className="step_icon"></div>
          <div className="step_instructions"></div>
        </div>
        <div className="how-to-bid_step">
          <div className="step_icon"></div>
          <div className="step_instructions"></div>
        </div>
      </div>
      <div className="how to bid__description"></div>
    </div>
  );
};
export default HowToBid;
