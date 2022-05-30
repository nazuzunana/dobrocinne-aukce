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
          <p>我地NGO DEI</p>
        </div>
        <div className="organisation__adress">
          <p>Letohradská 711/10</p>
          <p>170 00 Praha 7-Holešovice</p>
          <p>Česká republika</p>
        </div>
        <div className="organisation__email">e-mail</div>
        <div className="organisation__phone">
          <p>+420 606 125 203</p>
        </div>
      </div>
      <div className="author__cards">
        {authors.map((author) => (
          <AuthorCard
            key={author.name}
            photo={author.photo}
            name={author.name}
            email={author.email}
            phone={author.phone}
            instagramUrl={author.instagramUrl}
            instagramUsername={author.instagramUsername}
            githubUrl={author.githubUrl}
            githubUsername={author.githubUsername}
            description={author.description}
          />
        ))}
      </div>
    </div>
  );
};
export default Contact;
