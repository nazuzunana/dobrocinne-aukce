import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

// domovská stránka
// slideshow

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const mounted = useRef();

  useEffect(() => {
    getDocs(collection(db, 'slideshow')).then((querySnapshot) => {
      const slides = [];

      querySnapshot.forEach((doc) => {
        slides.push({ id: doc.id, ...doc.data() });
      });

      Promise.all(
        slides.map((slide) => getDownloadURL(ref(storage, slide.img))),
      ).then((urls) => {
        slides.forEach((slide, index) => (slide.url = urls[index]));
        setSlides(slides);

        mounted.current = setInterval(() => {
          setSlide((prev) => {
            if (prev === slides.length - 1) {
              return 0;
            }
            return prev + 1;
          });
        }, 7000);
      });
    });

    return () => {
      if (mounted.current) {
        clearInterval(mounted.current);
      }
    };
  }, [mounted, setSlide]);

  return slides.length > 0 ? (
    <div className="box__slideshow">
      <div className="carousel__media">
        <div className="name_box">
          <div className="slideshow_name">{slides[slide].title}</div>
        </div>

        <span
          className="carousel__previous"
          aria-label="předchozí"
          onClick={() => (slide === 0 ? setSlide(3) : setSlide(slide - 1))}
        >
          <i className="arrow right"></i>
        </span>
        <Link to={`/Auction/${slides[slide].auction.id}`}>
          <img
            className="carousel__image"
            src={slides[slide].url}
            alt={slides[slide].title}
          />
        </Link>
        <span
          className="carousel__next"
          aria-label="další"
          onClick={() => (slide === 3 ? setSlide(0) : setSlide(slide + 1))}
        >
          <i className="arrow left"></i>
        </span>
      </div>
    </div>
  ) : null;
};

// k slideshow ešte časovač a figcaption

const Home = () => (
  <div className="container__homepage">
    <div className="homepage__box">
      <div className="box__auctions">
        <div className="box__auctions-text">
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
            anglickém překladu Diversity, Equality, and Inclusion (rozmanitost,
            rovnost a začlenění).
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
