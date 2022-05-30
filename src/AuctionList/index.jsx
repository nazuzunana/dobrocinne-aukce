import React from 'react';
import './style.css';
import { Timer } from '../Timer';
import { Link } from 'react-router-dom';
import imageRadojcic from './img/Radojcic_zahrada_1.jpg';
import imageSen from './img/prazsky_sen.jpg';

// seznam aukcí

const auctions = [
  {
    img: imageRadojcic,
    title: 'Aukce na pomoc Ukrajině',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error delectus nulla quaerat, voluptatum excepturi expedita dolores ab id dolor corporis. Počet předmětů: 2',
  },

  {
    img: imageSen,
    title: 'Aukce na podporu psího útulku',
    description:
      'LOREM ipsum dolor sit amet consectetur adipisicing elit. Ipsa error delectus nulla quaerat, voluptatum excepturi expedita dolores ab id dolor corporis. Počet předmětů: 2',
  },
];

// hore je pole/zoznam aukcií, tam sa pridáva ďalšia aukcia

const Auction = ({ img, title, description }) => (
  <>
    <section className="container__list">
      <div>
        <img className="auction__img" src={img} />
      </div>
      <div className="auction__content">
        <h2>{title}</h2>
        <div className="auction__description">{description}</div>
        <Timer />

        <Link to="/Auction">
          <button className="auction__enter">Přejít do aukce</button>
        </Link>
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
