import React from 'react';
import './style.css';

// kartička s údaji o autorovi

const AuthorCard = () => {
  return (
    <>
      <div className="author__photo"></div>
      <div className="author__name"></div>
      <div className="author__contact">
        <div className="author__email"></div>
        <div className="author__phone"></div>
      </div>
      <div className="author__socials">
        <div className="socials__instagram"></div>
        <div className="socials__github"></div>
      </div>
      <div className="author__description"></div>
    </>
  );
};

export default AuthorCard;
