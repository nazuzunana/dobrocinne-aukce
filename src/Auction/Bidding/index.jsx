import React, { useState, useEffect } from 'react';
import './style.css';
import hammer from './img/hammer.svg';
import { useUser } from '../../User';
import { useLoginModal } from '../../Modal';
import { collection, addDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

// přihazování na položku v aukci

const caltulateMinimalBid = (currentPrice) => {
  if (currentPrice < 500) {
    return 20;
  }
  if (currentPrice >= 500 && currentPrice <= 5000) {
    return 100;
  }
  if (currentPrice > 5000 && currentPrice <= 10000) {
    return 500;
  }
  if (currentPrice > 10000 && currentPrice <= 50000) {
    return 1000;
  }
  if (currentPrice > 50000 && currentPrice <= 100000) {
    return 5000;
  }
  if (currentPrice > 100000 && currentPrice <= 500000) {
    return 10000;
  }
  if (currentPrice > 500000 && currentPrice <= 1000000) {
    return 50000;
  }
  if (currentPrice > 1000000 && currentPrice <= 50000000) {
    return 100000;
  }
  if (currentPrice > 50000000) {
    return 200000;
  }
};

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
  const [minimalBid, setMinimalBid] = useState(
    caltulateMinimalBid(currentPrice),
  );
  const [bidMessage, setBidMessage] = useState('');

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
        setMinimalBid(caltulateMinimalBid(currentPrice));
      },
    );
  }, [auctionId, lotId, setCurrentPrice, setMinimalBid]);

  const placeBid = (amount) => {
    if (!user) {
      return setModalOpen(true);
    }

    addDoc(collection(db, 'auctions', auctionId, 'lots', lotId, 'bids'), {
      user: doc(db, 'users', user.uid),
      time: new Date(),
      amount,
    }).then(() => {
      setBidMessage(`Děkujeme za příhoz ${amount} CZK.`);
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
            <button onClick={() => placeBid(minimalBid)} className="btn_bid">
              {minimalBid} CZK
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
              min={minimalBid}
            />
            <button type="submit" className="btn_bid">
              Chci přihodit
            </button>
          </form>
        </div>
      )}
      {bidMessage ? (
        <p className="bidding__message">{bidMessage}</p>
      ) : (
        <p className="bidding__message"></p>
      )}
    </div>
  );
};

export default Bidding;
