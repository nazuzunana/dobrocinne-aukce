import React, { useEffect, useState } from 'react';
import './style.css';
import Bidding from '../Bidding';
import { storage } from '../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import ModalImage from 'react-modal-image-responsive';

// položka v aukci

export const AuctionLot = ({
  lot: {
    id,
    images,
    name,
    date,
    author,
    signature,
    technique,
    measurements,
    startingPrice,
  },
  auctionId,
}) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getDownloadURL(ref(storage, images[0])).then((url) => setImageUrl(url));
  }, [images, setImageUrl]);

  return (
    <div className="container__lot">
      <div className="auction__lot">
        <div className="lot__gallery">
          <ModalImage
            className="img"
            small={imageUrl}
            large={imageUrl}
            alt={name}
            hideDownload
            hideZoom
          />
        </div>
        <hr className="horizontal-line" />
        <div className="lot__description">
          <div className="lot__author">{author}</div>
          <div className="lot__name">{name}</div>
          <div className="lot__date">{date}</div>
          <div className="lot__signature">{signature}</div>
          <div className="lot__technique">{technique}</div>
          <div className="lot__measurements">{measurements}</div>
        </div>
        <Bidding
          auctionId={auctionId}
          lotId={id}
          startingPrice={startingPrice}
        />
      </div>
    </div>
  );
};

export default AuctionLot;
