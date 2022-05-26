import React from 'react';
import AuthorCard from '../AuthorCard';
import './style.css';

// kontakt

const Contact = () => {
  return (
    <div className="container__contact">
      <div className="contact__title">Kontakt</div>
      <div className="organisation__contact">
        <div className="organisation__name"></div>
        <div className="organisation__adress"></div>
        <div className="organisation__email"></div>
        <div className="organisation__phone"></div>
      </div>
      <div className="author__card">
        <AuthorCard />
      </div>
      <div className="author__card">
        <AuthorCard />
      </div>
    </div>
  );
};
export default Contact;
