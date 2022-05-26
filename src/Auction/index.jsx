import React from 'react';
import './style.css';

// aukce

const Auction = () => (
  <div className="container__auction">
    <div className="auction__name">Aukce</div>
    <div className="auction__timer"></div>
    <div className="auction__description"></div>
    <div className="auction__lots">
      <div className="auction__lot"></div>
      <div className="auction__lot"></div>
    </div>
  </div>
);

export default Auction;
