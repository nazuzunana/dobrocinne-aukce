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
        Popis účelu: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quasi ea, deleniti delectus dicta repellendus dolores animi, quam aut
        quod alias quae reiciendis consequatur harum eum ratione! Tempora, quis
        odio ut incidunt laborum autem harum accusantium esse optio possimus
        velit asperiores unde modi neque, minima enim molestiae cumque tempore
        excepturi id.
      </p>
      <Timer />
    </div>
    <Bidding />
  </div>
);

export default Auction;
