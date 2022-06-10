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

const MobileMenu = () => {
  return (
    <div className="container__mobile-menu">
      <div className="mobile-menu__links">
        <Link to="/HowToBid">
          <div className="mobile-menu__link">JAK DRAŽIT</div>
        </Link>
        <Link to="/AuctionList">
          <div className="mobile-menu__link">AUKCE</div>
        </Link>
        <Link to="/Contact">
          <div className="mobile-menu__link">KONTAKT</div>
        </Link>
        <Link to="/Registration">
          <div className="mobile-menu__link">REGISTRACE</div>
        </Link>
        <div className="mobile-menu__link">PŘIHLÁŠENÍ</div>
      </div>
    </div>
  );
};

const App = () => {
  // const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const setModalOpen = useLoginModal();

  const user = useUser();

  return (
    <div className="container">
      <nav>
        <Link to="/">
          <div className="organisation__logo"></div>
        </Link>
        <div
          className="nav__content"
          // data-open={hamburgerOpen}
        >
          <div className="nav__links">
            <div className="nav__link">
              <Link to="/HowToBid">JAK DRAŽIT</Link>
            </div>
            <div className="nav__link">
              <Link to="/AuctionList">AUKCE</Link>
            </div>
            <div className="nav__link">
              <Link to="/Contact">KONTAKT</Link>
            </div>
          </div>
          <div className="nav__buttons">
            {user ? (
              <button onClick={() => signOut(auth)} className="button__logout">
                Odhlásit
              </button>
            ) : (
              <>
                <Link to="/Registration">
                  <button className="button__register">
                    Registrace k dražbě
                  </button>
                </Link>
                <button
                  className="button__login"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  Přihlášení
                </button>{' '}
              </>
            )}
          </div>
        </div>
        <Link to="/MobileMenu" className="mobile-menu__icon">
          <div className="nav__hamburger-icon">
            {/* onClick={() => {
            setHamburgerOpen(!hamburgerOpen);
          }} */}
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </Link>
      </nav>
      <Outlet />
      <div className="footer">
        <div className="footer__links">
          <div className="footer__auction-rules">
            <a href="#">Aukční řád</a>
          </div>

          <div className="footer__privacy-policy">
            <a href="#">Ochrana osobních údajů</a>
          </div>

          <div className="footer__contact">
            <Link to="/Contact">Kontakt</Link>
          </div>
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
            <Route path="MobileMenu" element={<MobileMenu />}></Route>
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
