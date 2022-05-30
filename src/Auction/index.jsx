import React from 'react';
import AuctionLot from './AuctionLot';
import './style.css';

// aukce

const Auction = () => (
  <div className="container__auction">
    <div className="auction__name">Aukce</div>
    <div className="auction__timer"></div>
    <div className="auction__description"></div>
  </div>
);

export default Auction;
