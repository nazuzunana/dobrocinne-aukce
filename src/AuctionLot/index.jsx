import React from 'react';
import './style.css';

// položka v aukci

const AuctionLot = () => (
  <div className="container__lot">
    <div className="lot__gallery"></div>
    <div className="lot__name"></div>
    <div className="lot__description"></div>
    <div className="lot__bidding"></div>
  </div>
);

export default AuctionLot;
