import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './style.css';
import Home from './Home/index.jsx';
import HowToBid from './HowToBid/index.jsx';
import Contact from './Contact/index.jsx';
import AuctionList from './AuctionList';
import Registration from './Registration';
import Auction from './Auction';
import UserProvider, { useUser } from './User';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import ModalProvider, { useLoginModal } from './Modal';
import ScrollToTop from './ScrollToTop';

// doplnit stylovanie, ktory link je zrovna aktivny: https://reactrouter.com/docs/en/v6/getting-started/tutorial#active-links

const App = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const setModalOpen = useLoginModal();

  const user = useUser();

  return (
    <div className="container">
      <nav>
        <Link to="/">
          <div
            className="organisation__logo"
            onClick={() => setHamburgerOpen(false)}
          ></div>
        </Link>
        <div className="nav__content" data-open={hamburgerOpen}>
          <div className="nav__links">
            <Link
              to="/HowToBid"
              className="nav__link"
              onClick={() => setHamburgerOpen(false)}
            >
              JAK DRAŽIT
            </Link>
            <Link
              to="/AuctionList"
              className="nav__link"
              onClick={() => setHamburgerOpen(false)}
            >
              AUKCE
            </Link>
            <Link
              to="/Contact"
              className="nav__link"
              onClick={() => setHamburgerOpen(false)}
            >
              KONTAKT
            </Link>
          </div>
          <div className="nav__buttons">
            {user ? (
              <button
                onClick={() => {
                  signOut(auth);
                  setHamburgerOpen(false);
                }}
                className="button__logout"
              >
                Odhlásit
              </button>
            ) : (
              <>
                <Link to="/Registration">
                  <button
                    className="button__register"
                    onClick={() => setHamburgerOpen(false)}
                  >
                    Registrace k dražbě
                  </button>
                </Link>
                <button
                  className="button__login"
                  onClick={() => {
                    setModalOpen(true);
                    setHamburgerOpen(false);
                  }}
                >
                  Přihlášení
                </button>{' '}
              </>
            )}
          </div>
        </div>
        <div
          className="nav__hamburger-icon"
          onClick={() => {
            setHamburgerOpen(!hamburgerOpen);
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      <Outlet />
      <div className="footer">
        <div className="footer__links">
          <a href="#" className="footer__auction-rules">
            Aukční řád
          </a>

          <a href="#" className="footer__privacy-policy">
            Ochrana osobních údajů
          </a>

          <Link to="/Contact" className="footer__contact">
            Kontakt
          </Link>
        </div>
        <div className="footer__copyright">
          © 2022, Vytvořeno pro Czechitas, Digitální akademie: Web
        </div>
      </div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(
  <UserProvider>
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="HowToBid" element={<HowToBid />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="AuctionList" element={<AuctionList />} />
            <Route path="Registration" element={<Registration />} />
            <Route path="Auction/:id" element={<Auction />} />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Ups...tady nic není.</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  </UserProvider>,
);
