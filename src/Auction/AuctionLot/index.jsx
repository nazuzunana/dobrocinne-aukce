import React from 'react';
import './style.css';
import Bidding from '../Bidding';

// položka v aukci

export const lots = [
  {
    img: 'img img__pristav',
    name: 'Přístav',
    date: 'nedatováno',
    author: 'Autor neurčený',
    signature: 'signováno LD, signatura nečitelná',
    technique: 'olej na plátně',
    measurements: '49,5x69,5 cm',
  },
  {
    img: 'img img__prirodopis',
    name: 'Přírodopis',
    date: '1973-2012',
    author: 'Jan Švankmajer (*1934)',
    signature: 'signováno PD',
    technique: 'litografie',
    measurements: '79x57,5 cm',
  },
  {
    img: 'img img__valecne-utrpeni',
    name: 'Válečné utrpení',
    date: 'nedatováno',
    author: 'Autor neurčený',
    signature: 'signováno PD, signatura nečitelná',
    technique: 'lept',
    measurements: '16x29 cm',
  },

  {
    img: 'img img__prazsky-sen',
    name: 'Pražský sen',
    date: 'nedatováno',
    author: 'Miroslav Houšť (*1954)',
    signature: 'signováno PD',
    technique: 'barevná litografie na papíře',
    measurements: '51x48,5 cm',
  },

  {
    img: 'img img__zahrada',
    name: 'Zahrada',
    date: 'nedatováno',
    author: 'George Radojčič (*1987)',
    signature: 'signováno PD',
    technique: 'akryl na plátně',
    measurements: '59x60 cm',
  },

  {
    img: 'img img__hra',
    name: 'Hra',
    date: '2012',
    author: 'Kurt Gebauer (*1941)',
    signature: 'signováno PD „Kurt Gebauer“',
    technique: 'litografie',
    measurements: '72,5x51 cm',
  },

  {
    img: 'img img__zeny',
    name: 'Ženy',
    date: 'nedatováno',
    author: 'Irena Trefilová (*1967)',
    signature: 'signováno PD, vyryto v malbě',
    technique: 'olej na plátně',
    measurements: '68x100 cm',
  },

  {
    img: 'img img__osvetlovani',
    name: 'Osvětlování XIII.',
    date: '1988',
    author: 'Ondřej Michálek (*1947)',
    signature: 'signováno PD',
    technique: 'linoryt',
    measurements: '61,5x79 cm',
  },
];

export const AuctionLot = ({
  img,
  name,
  date,
  author,
  signature,
  technique,
  measurements,
}) => (
  <div className="container__lot">
    <div className="auction__lot">
      <div className="lot__gallery">
        <div className={img}></div>
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
      <Bidding />
    </div>
  </div>
);

export default AuctionLot;
