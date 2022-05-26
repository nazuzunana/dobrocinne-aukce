import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import timer from './img/timer.svg';

// seznam aukcí

const AuctionList = () => (
  <>
    <section className="container__list">
      <div className="auction__img"></div>
      <div className="auction__content">
        <h2>Aukce na pomoc Ukrajině</h2>
        <div className="auction__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
          delectus nulla quaerat, voluptatum excepturi expedita dolores ab id
          dolor corporis.
          <p>Počet předmětů: 2</p>
        </div>

        <div className="auction__timer">
          <img className="icon__timer" src={timer} />
          <div className="vertical__line"></div>
          Končí za 3 hod 24 min
        </div>

        <button className="auction__enter">
          <Link to="/Auction">Přejít do aukce</Link>
        </button>
      </div>
    </section>
    <section className="container__list">
      <div className="auction__img"></div>
      <div className="auction__content">
        <h2>Aukce na podporu psího útulku</h2>
        <div className="auction__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
          delectus nulla quaerat, voluptatum excepturi expedita dolores ab id
          dolor corporis.
          <p>Počet předmětů: 2</p>
        </div>

        <div className="auction__timer">
          <img className="icon__timer" src={timer} />
          <div className="vertical__line"></div>
          Končí za X hod XY min
        </div>

        <button className="auction__enter">
          <Link to="/Auction">Přejít do aukce</Link>
        </button>
      </div>
    </section>
  </>
);

export default AuctionList;
