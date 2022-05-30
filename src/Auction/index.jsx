import React from 'react';
import './style.css';
import Bidding from './Bidding';
import { Timer } from '../Timer';

// aukce

const Auction = () => (
  <div className="container__auction">
    <div className="auction__intro">
      <h2 className="auction__name">Aukce</h2>
      <p className="auction__text">
        Popis účelu:Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Doloremque fugit, animi voluptatibus beatae dolorum quia vel quidem aut.
      </p>
      <Timer />
    </div>
    <Bidding />
  </div>
);

export default Auction;
