import React, { useEffect, useState } from 'react';
import './style.css';
import { Timer } from '../Timer';
import AuctionLot from './AuctionLot';
import { lots } from './AuctionLot';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

// aukce

const Auction = () => {
  const [auction, setAuction] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, 'auctions', id);
    getDoc(docRef).then((docSnap) => {
      setAuction(docSnap.data());
    });
  }, [setAuction]);

  return auction ? (
    <div className="container__auction">
      <div className="auction__intro">
        <h2 className="auction__name">{auction.title}</h2>
        <p className="auction__text">{auction.description}</p>
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
  ) : null;
};

export default Auction;
