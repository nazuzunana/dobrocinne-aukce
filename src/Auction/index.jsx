import React from 'react';
import './style.css';
import { Timer } from '../Timer';
import AuctionLot from './AuctionLot';
import { lots } from './AuctionLot';

// aukce

const Auction = () => (
  <div className="container__auction">
    <div className="auction__intro">
      <h2 className="auction__name">Aukce</h2>
      <p className="auction__text">
        Popis účelu: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quasi ea, deleniti delectus dicta repellendus dolores animi, quam aut
        quod alias quae reiciendis consequatur harum eum ratione! Tempora, quis
        odio ut incidunt laborum autem harum accusantium esse optio possimus
        velit asperiores unde modi neque, minima enim molestiae cumque tempore
        excepturi id.
      </p>
      <Timer />
    </div>
    <div className="auction__lots">
      {lots.map((lot) => (
        <AuctionLot
          key={lot.name}
          name={lot.name}
          author={lot.author}
          technique={lot.technique}
          measurements={lot.measurements}
        />
      ))}
    </div>
  </div>
);

export default Auction;
