import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

// seznam aukcí

const AuctionList = () => (
  <div className="container__list">
    <div className="list__title">Seznam aukcí</div>
    <div className="list__auction">
      <div className="auction__img"></div>
      <div className="auction__name">
        <p className="auction__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
          delectus nulla quaerat, voluptatum excepturi expedita dolores ab id
          dolor corporis.
        </p>
        <>Počet předmětů: 2</>
        <div className="auction_:timer">Končí za</div>
      </div>
      <button className="auction__enter">
        <Link to="/Auction">Přejít do aukce</Link>
      </button>
    </div>
    <div className="list__auction">
      <div className="auction__img"></div>
      <div className="auction__name"></div>
      <div className="auction__description"></div>
      <div className="auction__enter">
        <Link to="/Auction">Vstoupit</Link>
      </div>
    </div>
  </div>
);

export default AuctionList;
