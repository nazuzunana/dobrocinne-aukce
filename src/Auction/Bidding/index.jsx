import React, { useState, useEffect } from 'react';
import './style.css';
import hammer from './img/hammer.svg';
import { useUser } from '../../User';
import { useLoginModal } from '../../Modal';
import { collection, addDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

// přihazování na položku v aukci

export const Bidding = ({
  lotId,
  auctionId,
  startingPrice,
  auctionRunning,
}) => {
  const user = useUser();
  const setModalOpen = useLoginModal();

  const [bid, setBid] = useState('');
  const [currentPrice, setCurrentPrice] = useState(startingPrice);

  useEffect(() => {
    return onSnapshot(
      collection(db, 'auctions', auctionId, 'lots', lotId, 'bids'),
      (collectionSnap) => {
        const bids = [];
        collectionSnap.forEach((doc) => {
          bids.push({ id: doc.id, ...doc.data() });
        });

        const currentPrice = bids.reduce(
          (previousPrice, bid) => previousPrice + bid.amount,
          startingPrice,
        );

        setCurrentPrice(currentPrice);
      },
    );
  }, [auctionId, lotId, setCurrentPrice]);

  const placeBid = (amount) => {
    if (!user) {
      return setModalOpen(true);
    }

    addDoc(collection(db, 'auctions', auctionId, 'lots', lotId, 'bids'), {
      user: doc(db, 'users', user.uid),
      time: new Date(),
      amount,
    });
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
        <span className="bidding__current-price">{currentPrice} CZK</span>
      </p>

      {auctionRunning && (
        <div className="bidding__inputs">
          <p>Minimální příhoz:</p>
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
      )}
      <img className="icon__hammer" src={hammer} />
    </div>
  );
};

export default Bidding;
