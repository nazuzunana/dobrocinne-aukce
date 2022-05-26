import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

// seznam aukcí

const AuctionList = () => (
  <div className="container__list">
    <div className="list__title">Seznam aukcí</div>
    <div className="list__auction">
      <div className="auction__img"></div>
      <div className="auction__name"></div>
      <div className="auction__description"></div>
      <div className="auction__enter">
        <Link to="/Auction">Vstoupit</Link>
      </div>
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
