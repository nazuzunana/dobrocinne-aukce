import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

// kartička s údaji o autorovi

export const authors = [
  {
    photo: './img/viktoria.png',
    name: 'Viktória Andraščíková',
    email: 'viktoria.andrascikova@gmail.com',
    phone: 'telefon',
    instagramUrl: 'https://www.instagram.com/viktoradelaville/',
    instagramUsername: '@viktoradelaville',
    githubUrl: 'https://github.com/ViktoriaAndr',
    githubUsername: '@ViktoriaAndr',
    description: 'popis vik',
  },
  {
    photo: './img/zuzana.jpg',
    name: 'Zuzana Červínová',
    email: 'zuzankacervinova@gmail.com',
    phone: '+420 774 353 833',
    instagramUrl: 'https://www.instagram.com/nazuzunana/',
    instagramUsername: '@nazuzunana',
    githubUrl: 'https://github.com/nazuzunana',
    githubUsername: '@nazuzunana',
    description: 'popis zuzana',
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
      <div className="author__photo"></div>
      <div className="author__name">{name}</div>
      <div className="author__contact">
        <div className="author__email">{email}</div>
        <div className="author__phone">{phone}</div>
      </div>
      <div className="author__socials">
        <div className="socials__instagram">
          Instagram:{' '}
          <a href={instagramUrl} target="_blank">
            {instagramUsername}
          </a>
        </div>
        <div className="socials__github">
          GitHub:{' '}
          <a href={githubUrl} target="_blank">
            {githubUsername}
          </a>
        </div>
      </div>
      <div className="author__description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
