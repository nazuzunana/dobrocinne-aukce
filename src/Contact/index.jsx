import React from 'react';
import AuthorCard from './AuthorCard';
import './style.css';
import { authors } from './AuthorCard';

// kontakt

const Contact = () => {
  return (
    <div className="container__contact">
      <div className="organisation__contact">
        <div className="organisation__name">
          <p>我地 NGO DEI</p>
        </div>
        <div className="organisation__adress">
          <p>Letohradská 711/10</p>
          <p>170 00 Praha 7-Holešovice</p>
          <p>Česká republika</p>
        </div>
        <div className="organisation__email-phone">
          <div className="organisation__email">
            <p>info@ngodei.org</p>
          </div>
          <div className="organisation__phone">
            <p>+420 606 125 203</p>
          </div>
        </div>
        <div className="organisation__socials">
          <a href="https://www.facebook.com/ngodei.org/" target="_blank">
            <div className="socials__icons organisation__facebook"></div>
          </a>
          <a href="https://www.instagram.com/ngodeiorg" target="_blank">
            <div className="socials__icons organisation__instagram"></div>
          </a>
          <a href="https://www.ngodei.org/" target="_blank">
            <div className="socials__icons organisation__website"></div>
          </a>
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="project">
        <div className="project__name">Dobročinné aukce</div>
        <div className="project__description">
          Projekt vznikl v rámci digitální akademie webového vývoje neziskové
          organizace Czechitas v létě 2022. Rády bychom po skončení akademie web
          nadále rozvíjely a darovaly dobročinné neziskové organizaci, která by
          jej užívala pro vlastní účely. <br />
          <br />V případě otázek týkajících se webu nás neváhejte kontaktovat.
        </div>
      </div>
      <div className="project__authors">
        <div className="author__cards">
          {authors.map((author) => (
            <AuthorCard
              key={author.name}
              photo={author.photo}
              name={author.name}
              email={author.email}
              phone={author.phone}
              linkedin={author.linkedin}
              instagram={author.instagram}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Contact;
