import React from 'react';
import './style.css';

// kartička s údaji o autorovi

export const authors = [
  {
    photo: 'photo__viktoria',
    name: 'Viktória Andraščíková',
    email: 'viktoria.andrascikova@gmail.com',
    phone: '+420 728 637 263',
    linkedin: 'https://www.linkedin.com/in/viktoriaandrascikova/',
    instagram: 'https://www.instagram.com/viktoradelaville/',
  },
  {
    photo: 'photo__zuzana',
    name: 'Zuzana Červínová',
    email: 'zuzankacervinova@gmail.com',
    phone: '+420 774 353 833',
    linkedin: 'https://www.linkedin.com/in/zuzanacervinova/',
    instagram: 'https://www.instagram.com/nazuzunana/',
  },
];

const AuthorCard = ({ photo, name, email, phone, linkedin, instagram }) => {
  return (
    <div className="author__card">
      <div className={photo}></div>
      <div className="author__name">{name}</div>
      <div className="author__contact">
        <div className="author__email">{email}</div>
        <div className="author__phone">{phone}</div>
      </div>
      <div className="author__socials">
        <a href={linkedin} target="_blank">
          <div className="socials__icons author__linkedin"></div>
        </a>
        <a href={instagram} target="_blank">
          <div className="socials__icons author__instagram"></div>
        </a>
      </div>
    </div>
  );
};

export default AuthorCard;
