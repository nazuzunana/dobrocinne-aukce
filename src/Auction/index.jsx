import React, { useEffect, useState } from 'react';
import './style.css';
import { Timer } from '../Timer';
import AuctionLot from './AuctionLot';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

// aukce

const Auction = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [lots, setLots] = useState([]);

  useEffect(() => {
    const docRef = doc(db, 'auctions', id);
    getDoc(docRef).then((docSnap) => {
      setAuction(docSnap.data());
    });

    getDocs(collection(docRef, 'lots')).then((collectionSnap) => {
      const lots = [];
      collectionSnap.forEach((doc) => {
        lots.push({ id: doc.id, ...doc.data() });
      });
      setLots(lots);
    });
  }, [setAuction, setLots]);

  return auction ? (
    <div className="container__auction">
      <div className="auction__intro">
        <h2 className="auction__name">{auction.title}</h2>
        <p className="auction__text">{auction.description}</p>
        <Timer endDate={auction.endDate} />
      </div>
      <hr className="horizontal-line" />
      <div className="auction__lots">
        {lots.map((lot) => (
          <AuctionLot key={lot.id} lot={lot} auctionId={id} />
        ))}
      </div>
    </div>
  ) : null;
};

export default Auction;
