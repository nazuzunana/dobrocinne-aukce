import React from 'react';
import './style.css';
import Bidding from '../Bidding';

// položka v aukci

export const lots = [
  {
    name: 'Přístav',
    author: 'Autor neurčený',
    technique: 'olej na plátně',
    measurements: '49,5x69,5 cm',
  },
  {
    name: 'Přírodopis (23/35) ',
    author: 'Jan Švankmajer',
    technique: 'litografie',
    measurements: '79x57,5 cm',
  },
];

export const AuctionLot = ({ name, author, technique, measurements }) => (
  <div className="container__lot">
    <div className="lot__gallery"></div>
    <div className="lot__name">{name}</div>
    <div className="lot__author">{author}</div>
    <div className="lot__technique">{technique}</div>
    <div className="lot__measurements">{measurements}</div>
    <Bidding />
  </div>
);

export default AuctionLot;
