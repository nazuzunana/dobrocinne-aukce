import React from 'react';
import './style.css';
import hammer from './img/hammer.svg';

// přihazování na položku v aukci

export const Bidding = () => {
  return (
    <>
      <div className="lot__bidding">
        <p>Vyvolávací cena: 5000 CZK</p>
        <p>
          Poslední
          <img className="icon__hammer" src={hammer} />:
        </p>
        <div class="bidding__inputs">
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
      </div>
    </>
  );
};
export default Bidding;
