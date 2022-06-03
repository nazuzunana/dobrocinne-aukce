import React from 'react';
import './style.css';
import Bidding from '../Bidding';

// položka v aukci

export const lots = [
  {
    img: 'img img__pristav',
    name: 'Přístav',
    author: 'Autor neurčený',
    technique: 'olej na plátně',
    measurements: '49,5x69,5 cm',
  },
  {
    img: 'img img__prirodopis',
    name: 'Přírodopis',
    author: 'Jan Švankmajer (*1934)',
    technique: 'litografie',
    measurements: '79x57,5 cm',
  },
  {
    img: 'img img__valecne-utrpeni',
    name: 'Válečné utrpení',
    author: 'Autor neurčený',
    technique: 'lept',
    measurements: '16x29 cm',
  },

  {
    img: 'img img__prazsky-sen',
    name: 'Pražský sen',
    author: 'Miroslav Houšť (*1954)',
    technique: 'barevná litografie na papíře',
    measurements: '51x48,5 cm',
  },

  {
    img: 'img img__zahrada',
    name: 'Zahrada',
    author: 'George Radojčič (*1987)',
    technique: 'akryl na plátně',
    measurements: '59x60 cm',
  },

  {
    img: 'img img__deti',
    name: 'Hra',
    author: 'Kurt Gebauer (*1941)',
    technique: 'litografie',
    measurements: '72,5x51 cm',
  },

  {
    img: 'img img__zeny',
    name: 'Ženy',
    author: 'Irena Trefilová (*1967)',
    technique: 'olej na plátně',
    measurements: '68x100 cm',
  },

  {
    img: 'img img__osvetlovani',
    name: 'Osvětlování XIII.',
    author: 'Ondřej Michálek ( 	*1947)',
    technique: 'linoryt',
    measurements: ' 	61,5x79 cm',
  },
];

export const AuctionLot = ({ img, name, author, technique, measurements }) => (
  <div className="container__lot">
    <div className="auction__lot">
      <div className="lot__gallery">
        <div className={img}></div>
      </div>
      <hr className="horizontal-line" />
      <div className="lot__description">
        <div className="lot__name">{name}</div>
        <div className="lot__author">{author}</div>
        <div className="lot__technique">{technique}</div>
        <div className="lot__measurements">{measurements}</div>
      </div>
      <Bidding />
    </div>
  </div>
);

export default AuctionLot;
