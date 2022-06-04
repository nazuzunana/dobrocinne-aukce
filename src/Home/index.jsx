import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import imageJan from './img/Jan_Svankmajer_prirodopis_1.jpg';
import imagePristav from './img/Pristav_1.jpg';
import imageUtrpeni from '../Auction/lots/valecne-utrpeni.jpg';
import imageSen from '../Auction/lots/prazsky-sen.jpg';
// domovská stránka

// slideshow

const imagesTest = [imagePristav, imageJan, imageUtrpeni, imageSen];

const Carousel = () => {
  const [image, setImage] = useState(0);
  const [images, setImages] = useState(() => imagesTest);
  const mounted = useRef();

  useEffect(() => {
    mounted.current = setInterval(() => {
      setImage((prev) => {
        console.log('Update image');
        if (prev === images.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => {
      if (mounted.current) {
        clearInterval(mounted.current);
      }
    };
  }, []);

  return (
    <div className="box__slideshow">
      <div className="carousel__media">
        <div class="name_box">
          <div class="slideshow_name">
            Here comes the name of the masterpiece
          </div>
        </div>

        <a
          className="carousel__previous"
          aria-label="předchozí"
          onClick={() => (image === 0 ? setImage(3) : setImage(image - 1))}
        >
          <i className="arrow right"></i>
        </a>
        <img
          className="carousel__image"
          src={images[image]}
          alt=""
          style={{ backgroundColor: image % 2 !== 0 ? 'red' : 'green' }}
        />
        <a
          className="carousel__next"
          aria-label="další"
          onClick={() => (image === 3 ? setImage(0) : setImage(image + 1))}
        >
          <i className="arrow left"></i>
        </a>
      </div>
    </div>
  );
};

// k slideshow ešte časovač a figcaption

const Home = () => {
  return (
    <div className="container__homepage">
      <div className="homepage__box">
        <div className="box__auctions">
          <div className="box__auctions-text">
            <p>
              Dobročinných sbírek jsme viděly mnoho, také uměleckých aukčních
              domů a aukčních portálů, a tak jsme tyto dvě činnosti spojily.
              Chyběl nám aukční web, jenž by spojoval příjemné s užitečným:
              někdo má hodně a nestrádá, když daruje. Někdo si rád udělá radost
              a zároveň radost přinese někomu, kdo to opravdu potřebuje.
              <br />
              <br />
              Pojďte si s námi něco hezkého pořídit!
            </p>
          </div>
          <div className="box__auctions__button">
            <Link to="/AuctionList">
              <button className="button__auctions">Seznam aukcí</button>
            </Link>
          </div>
        </div>
        <Carousel className="box__slideshow" />
      </div>
      <div className="homepage__text">
        <div className="box__text-img">
          <div className="overlay">
            <p>
              NGO DEI (我地) je nezisková organizace se sídlem v Praze, kterou
              založila skupina Čechů a Hongkongců. Znaky 我地 znamenají v
              kantonštině „my“ nebo „moje země“. Iniciály DEI znamenají v
              anglickém překladu Diversity, Equality, and Inclusion
              (rozmanitost, rovnost a začlenění).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
