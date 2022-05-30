import React from 'react';
import './style.css';

// přihazování na položku v aukci

export const Bidding = () => {
  return (
    <>
      <div className="lot__bidding">
        <h4>Název předmětu</h4>
        <p>Vyvolávací cena: 5000 CZK</p>
        <p>Poslední příhoz:</p>
        <div class="bidding__inputs">
          <div className="bidding__input">
            <input
              type="text"
              id="minbid"
              name="minimumbid"
              placeholder="Minimální příhoz 1000 CZK"
            ></input>
            <button className="btn_bid">Chci přihodit</button>
          </div>
          <div className="bidding__input">
            <input
              type="text"
              id="maxbid"
              name="maximumbid"
              placeholder="Váš maximální příhoz"
            ></input>
            <button className="btn_bid">Chci přihodit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bidding;
