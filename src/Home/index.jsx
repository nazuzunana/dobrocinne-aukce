import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

// domovská stránka
// slideshow

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const mounted = useRef();

  useEffect(() => {
    getDocs(collection(db, 'slideshow')).then((querySnapshot) => {
      const slides = [];

      querySnapshot.forEach((doc) => {
        slides.push({ id: doc.id, ...doc.data() });
      });

      slides.reverse();

      Promise.all(
        slides.map((slide) => getDownloadURL(ref(storage, slide.img))),
      ).then((urls) => {
        slides.forEach((slide, index) => (slide.url = urls[index]));
        setSlides(slides);

        mounted.current = setInterval(() => {
          setSlideIndex((prev) => {
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
  }, [mounted, setSlideIndex]);

  return slides.length > 0 ? (
    <div className="box__slideshow">
      <div className="carousel__media">
        <div className="name_box">
          <div className="slideshow_name">{slides[slideIndex].title}</div>
        </div>

        <span
          className="carousel__previous"
          aria-label="předchozí"
          onClick={() =>
            slideIndex === 0
              ? setSlideIndex(slides.length - 1)
              : setSlideIndex(slideIndex - 1)
          }
        >
          <i className="arrow right"></i>
        </span>
        <Link
          className="carousel__image-container"
          to={`/Auction/${slides[slideIndex].auction.id}`}
        >
          {slides.map((slide, index) => (
            <img
              className="carousel__image"
              key={slide.id}
              src={slide.url}
              alt={slide.title}
              style={{ opacity: slideIndex === index ? 1 : 0 }}
            />
          ))}
        </Link>
        <span
          className="carousel__next"
          aria-label="další"
          onClick={() =>
            slideIndex === slides.length - 1
              ? setSlideIndex(0)
              : setSlideIndex(slideIndex + 1)
          }
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
