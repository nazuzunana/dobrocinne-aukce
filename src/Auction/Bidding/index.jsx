import React from 'react';
import './style.css';
import hammer from './img/hammer.svg';

// přihazování na položku v aukci

export const Bidding = ({ startingPrice }) => (
  <div className="lot__bidding">
    <p>
      Vyvolávací cena:
      <br />
      <span className="bidding__starting-price">{startingPrice} CZK</span>
    </p>
    <p>
      Aktuální cena:
      <br />
      <span className="bidding__current-price"> CZK</span>
    </p>
    <p>Minimální příhoz:</p>
    <div className="bidding__inputs">
      <div className="bidding__input">
        <button className="btn_bid">1000 CZK</button>
      </div>
      <div className="bidding__input">
        <input
          type="text"
          id="maxbid"
          name="maximumbid"
          placeholder="Vlastní částka v CZK"
        ></input>
        <button className="btn_bid">Chci přihodit</button>
      </div>
    </div>
    <img className="icon__hammer" src={hammer} />
  </div>
);
export default Bidding;
