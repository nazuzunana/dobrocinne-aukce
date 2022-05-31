import React from 'react';
import './style.css';

// kartička s údaji o autorovi

export const authors = [
  {
    photo: './img/viktoria.png',
    name: 'Viktória Andraščíková',
    email: 'viktoria.andrascikova@gmail.com',
    phone: 'telefon',
    instagramUrl: 'https://www.instagram.com/viktoradelaville/',
    instagramUsername: 'viktoradelaville',
    githubUrl: 'https://github.com/ViktoriaAndr',
    githubUsername: 'ViktoriaAndr',
  },
  {
    photo: './img/zuzana.jpg',
    name: 'Zuzana Červínová',
    email: 'zuzankacervinova@gmail.com',
    phone: '+420 774 353 833',
    instagramUrl: 'https://www.instagram.com/nazuzunana/',
    instagramUsername: 'nazuzunana',
    githubUrl: 'https://github.com/nazuzunana',
    githubUsername: 'nazuzunana',
  },
];

const AuthorCard = ({
  photo,
  name,
  email,
  phone,
  instagramUrl,
  instagramUsername,
  githubUrl,
  githubUsername,
  description,
}) => {
  return (
    <div className="author__card">
      <img className="author__photo" src={photo}></img>
      <div className="author__name">{name}</div>
      <div className="author__contact">
        <div className="author__email">{email}</div>
        <div className="author__phone">{phone}</div>
      </div>
      <div className="author__socials">
        <a href={githubUrl} target="_blank">
          <div className="author__github"></div>
        </a>
        <a href={instagramUrl} target="_blank">
          <div className="author__instagram"></div>
        </a>
      </div>
    </div>
  );
};

export default AuthorCard;
