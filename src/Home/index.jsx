import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

// domovská stránka

const Home = () => {
  return (
    <div className="container__homepage">
      <div className="homepage__box">
        <div className="box__auctions">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quia soluta voluptas aspernatur cupiditate nostrum placeat expedita
          suscipit tempora illo?
          <Link to="/AuctionList">Seznam aukcí</Link>
        </div>
        <div className="box__slideshow">Slideshow</div>
      </div>
      <div className="homepage__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident
        odit fugit a impedit rem maiores alias laborum? Dignissimos molestias
        officia ducimus quam. Illum quaerat nostrum exercitationem fuga soluta
        vero. Quae id ipsam nisi unde, laborum vitae molestias quibusdam
        aspernatur iure repudiandae provident exercitationem nulla architecto
        voluptas sunt non! Reiciendis.
      </div>
    </div>
  );
};

export default Home;
