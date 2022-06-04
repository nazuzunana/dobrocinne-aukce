import React, { useEffect, useState } from 'react';
import './style.css';
import { Timer } from '../Timer';
import { Link } from 'react-router-dom';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

// seznam aukcí

const AuctionListAuction = ({ id, img, title, description }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getDownloadURL(ref(storage, img[0])).then((url) => setImageUrl(url));
  }, [img, setImageUrl]);

  return (
    <>
      <section className="auction-list__auction">
        <div
          className="auction__img"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div className="auction__content">
          <h2>{title}</h2>
          <div className="auction__description">{description}</div>
          <Timer />
          <Link to={`/Auction/${id}`}>
            <button className="auction__enter">Přejít do aukce</button>
          </Link>
        </div>
      </section>
    </>
  );
};

const AuctionList = () => {
  const [auctionListAuctions, setAuctionListAuctions] = useState([]);

  useEffect(() => {
    getDocs(query(collection(db, 'auctions'), orderBy('endDate', 'desc'))).then(
      (querySnapshot) => {
        const auctions = [];
        querySnapshot.forEach((doc) => {
          auctions.push({ id: doc.id, ...doc.data() });
        });
        setAuctionListAuctions(auctions);
      },
    );
  }, [setAuctionListAuctions]);

  return (
    <div className="container__auction-list">
      {auctionListAuctions.map((auctionListAuction) => (
        <AuctionListAuction
          key={auctionListAuction.id}
          id={auctionListAuction.id}
          img={auctionListAuction.img}
          title={auctionListAuction.title}
          description={auctionListAuction.description}
        />
      ))}
    </div>
  );
};

export default AuctionList;
