import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './style.css';
import Home from './Home/index.jsx';
import HowToBid from './HowToBid/index.jsx';
import Contact from './Contact/index.jsx';
import AuctionList from './AuctionList';
import Registration from './Registration';
import Auction from './Auction';

// const hamburgerMenu = () => {
//   const links = document.querySelector('.nav__links');
//   if (links.style.display === 'block') {
//     links.style.display = 'none';
//   } else {
//     links.style.display = 'block';
//   }
// };

const App = () => (
  <div className="container">
    <div className="nav">
      <Link to="/">
        <div className="organisation__logo">LOGO</div>
      </Link>
      <nav className="nav__content">
        <div className="nav__links">
          <div className="nav__link">
            <Link to="/HowToBid">Jak dražit</Link>
          </div>
          <div className="nav__link">
            <Link to="/AuctionList">Aukce</Link>
          </div>
          <div className="nav__link">
            <Link to="/Contact">Kontakt</Link>
          </div>
        </div>
        <div className="nav__buttons">
          <button className="button__register">
            <Link to="/Registration">Registrace k dražbě</Link>
          </button>
          <button className="button__login button__login--logged">
            Přihlášení
          </button>
        </div>
      </nav>
      <div className="nav__hamburger-icon"></div>
    </div>
    <Outlet />
    <div className="footer">
      <p>Czechitas, Digitální akademie: Web</p>
    </div>
  </div>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="HowToBid" element={<HowToBid />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="AuctionList" element={<AuctionList />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="Auction" element={<Auction />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
