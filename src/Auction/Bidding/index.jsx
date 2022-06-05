import React, { useState } from 'react';
import './style.css';
import hammer from './img/hammer.svg';
import { useUser } from '../../User';
import { useLoginModal } from '../../Modal';

// přihazování na položku v aukci

export const Bidding = ({ lotId, auctionId, startingPrice }) => {
  const user = useUser();
  const setModalOpen = useLoginModal();

  const [bid, setBid] = useState('');

  const placeBid = (amount) => {
    if (!user) {
      return setModalOpen(true);
    }

    console.log(amount);
  };

  return (
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
          <button onClick={() => placeBid(1000)} className="btn_bid">
            1000 CZK
          </button>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            placeBid(Number(bid));
          }}
          className="bidding__input"
        >
          <input
            value={bid}
            onChange={(event) => {
              const vstup = event.target.value;
              setBid(vstup);
            }}
            type="number"
            placeholder="Vlastní částka v CZK"
            required
            min={0}
          />
          <button type="submit" className="btn_bid">
            Chci přihodit
          </button>
        </form>
      </div>
      <img className="icon__hammer" src={hammer} />
    </div>
  );
};

export default Bidding;
