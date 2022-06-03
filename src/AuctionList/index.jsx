import React from 'react';
import './style.css';
import { Timer } from '../Timer';
import { Link } from 'react-router-dom';

// seznam aukcí

export const auctionListAuctions = [
  {
    img: 'auction__img img__pristav',
    title: 'Aukce na pomoc Ukrajině',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error delectus nulla quaerat, voluptatum excepturi expedita dolores ab id dolor corporis. Počet předmětů: 2',
  },

  {
    img: 'auction__img img__zahrada',
    title: 'Aukce na podporu psího útulku',
    description:
      'LOREM ipsum dolor sit amet consectetur adipisicing elit. Ipsa error delectus nulla quaerat, voluptatum excepturi expedita dolores ab id dolor corporis. Počet předmětů: 2',
  },
];

// hore je pole/zoznam aukcií, tam sa pridáva ďalšia aukcia

const AuctionListAuction = ({ img, title, description }) => (
  <>
    <section className="auction-list__auction">
      <div className={img}></div>
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
  <div className="container__auction-list">
    {auctionListAuctions.map((auctionListAuction) => (
      <AuctionListAuction
        key={auctionListAuction.title}
        img={auctionListAuction.img}
        title={auctionListAuction.title}
        description={auctionListAuction.description}
      />
    ))}
  </div>
);

export default AuctionList;

//poprosím nezasahovať do tohto kódu, trval mi extrémne dlho
