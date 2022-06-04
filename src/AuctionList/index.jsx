import React, { useEffect, useState } from 'react';
import './style.css';
import { Timer } from '../Timer';
import { Link } from 'react-router-dom';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

// seznam aukcí

// export const auctionListAuctions = [
//   {
//     img: 'auction__img img__pristav',
//     title: 'Aukce na pomoc Ukrajině',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error delectus nulla quaerat, voluptatum excepturi expedita dolores ab id dolor corporis. Počet předmětů: 2',
//   },

//   {
//     img: 'auction__img img__zahrada',
//     title: 'Aukce na podporu psího útulku',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error delectus nulla quaerat, voluptatum excepturi expedita dolores ab id dolor corporis. Počet předmětů: 2',
//   },
// ];

const AuctionListAuction = ({ img, title, description }) => {
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
          <Link to="/Auction">
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
          img={auctionListAuction.img}
          title={auctionListAuction.title}
          description={auctionListAuction.description}
        />
      ))}
    </div>
  );
};

export default AuctionList;

//poprosím nezasahovať do tohto kódu, trval mi extrémne dlho
