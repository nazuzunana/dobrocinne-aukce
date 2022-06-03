import React from 'react';
import './style.css';
import { Timer } from '../Timer';
import AuctionLot from './AuctionLot';
import { lots } from './AuctionLot';

// aukce

export const auctions = [
  {
    title: 'Aukce na pomoc Ukrajině',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error delectus nulla quaerat, voluptatum excepturi expedita dolores ab id dolor corporis. Počet předmětů: 2',
  },

  {
    title: 'Aukce na podporu psího útulku',
    description:
      'LOREM ipsum dolor sit amet consectetur adipisicing elit. Ipsa error delectus nulla quaerat, voluptatum excepturi expedita dolores ab id dolor corporis. Počet předmětů: 2',
  },
];

const Auction = ({ title, description }) => (
  <div className="container__auction">
    <div className="auction__intro">
      <h2 className="auction__name">Název aukce</h2>
      <p className="auction__text">
        Popis účelu: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Eveniet dolore dignissimos, officia exercitationem quibusdam vel odio
        numquam nam cumque. Minima illum iusto ducimus optio molestias,
        recusandae earum dolores pariatur doloremque.
      </p>
      <Timer />
    </div>
    <hr className="horizontal-line" />
    <div className="auction__lots">
      {lots.map((lot) => (
        <AuctionLot
          key={lot.name}
          img={lot.img}
          name={lot.name}
          date={lot.date}
          author={lot.author}
          signature={lot.signature}
          technique={lot.technique}
          measurements={lot.measurements}
        />
      ))}
    </div>
  </div>
);

export default Auction;
