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
    <div className="lot__name">Název díla: {name}</div>
    <div className="lot__author">Jméno autora: {author}</div>
    <div className="lot__technique">Technika: {technique}</div>
    <div className="lot__measurements">Rozměry: {measurements}</div>
    <Bidding />
  </div>
);

export default AuctionLot;
