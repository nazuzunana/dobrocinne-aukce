import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

// domovská stránka

const Home = () => {
  return (
    <div className="container__homepage">
      <div className="homepage__box">
        <div className="box__auctions">
          <p>
            Dobročinných sbírek jsme viděly mnoho, také uměleckých aukčních domů
            a aukčních portálů, a tak jsme tyto dvě činnosti spojily. Chyběl nám
            aukční web, jenž by spojoval příjemné s užitečným: někdo má hodně a
            nestrádá, když daruje. Někdo si rád udělá radost a zároveň radost
            přinese někomu, kdo to opravdu potřebuje.
            <br />
            <br />
            Pojďte si s námi něco hezkého pořídit!
          </p>
          <Link to="/AuctionList">
            <button className="button__auctions">Seznam aukcí</button>
          </Link>
        </div>
        <div className="box__slideshow">Sem ide slideshow</div>
      </div>
      <div className="homepage__text">
        <div className="box__text">
          <p>
            NGO DEI (我地) je nezisková organizace se sídlem v Praze, kterou
            založila skupina Čechů a Hongkongců. Znaky 我地 znamenají v
            kantonštině „my“ nebo „moje země“. Iniciály DEI znamenají v
            anglickém překladu Diversity, Equality, and Inclusion (rozmanitost,
            rovnost a začlenění).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Poznámky Javascript: slideshow časovač

//Poznámky CSS: Buttons animace?
