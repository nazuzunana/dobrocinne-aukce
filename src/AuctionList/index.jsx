import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import timer from './img/timer.svg';

// seznam aukcí

const auctions = [
  {
    img: '',
    title: 'Aukce na pomoc Ukrajině',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error delectus nulla quaerat, voluptatum excepturi expedita dolores ab id dolor corporis. Počet předmětů: 2',
  },

  {
    img: '',
    title: 'Aukce na podporu psího útulku',
    description:
      'LOREM ipsum dolor sit amet consectetur adipisicing elit. Ipsa error delectus nulla quaerat, voluptatum excepturi expedita dolores ab id dolor corporis. Počet předmětů: 2',
  },
];

// hore je pole/zoznam aukcií, tam sa pridáva ďalšia aukcia

const Auction = ({ img, title, description }) => (
  <>
    <section className="container__list">
      <div className="auction__img">{img}</div>
      <div className="auction__content">
        <h2>{title}</h2>
        <div className="auction__description">{description}</div>
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
  </>
);

const AuctionList = () => (
  <div className="auctions">
    {auctions.map((auction) => (
      <Auction
        img={auction.img}
        title={auction.title}
        description={auction.description}
      />
    ))}
  </div>
);

export default AuctionList;

//poprosím nezasahovať do tohto kódu, trval mi extrémne dlho
