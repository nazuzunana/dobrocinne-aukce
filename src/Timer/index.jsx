import './style.css';
import timer from './timer.svg';
import React from 'react';

export const Timer = ({ endDate: endTimestamp }) => {
  const endDate = endTimestamp.toDate(); // koniec aukcie
  const now = new Date(); // teraz
  const distance = endDate - now;

  if (distance < 0) {
    return (
      <div className="auction__timer">
        <img className="icon__timer" src={timer} />
        <div>
          <p>|</p>
        </div>
        <p>Aukce byla ukončena</p>
      </div>
    );
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="auction__timer">
      <img className="icon__timer" src={timer} />
      <div>
        <p>|</p>
      </div>
      <p>
        Končí za {days} dní {hours} hod {minutes} min
      </p>
    </div>
  );
};
