import './style.css';
import timer from './timer.svg';
import React from 'react';

export const Timer = () => (
  <div className="auction__timer">
    <img className="icon__timer" src={timer} />
    <div>
      <p>|</p>
    </div>
    <p>Končí za 3 hod 24 min</p>
  </div>
);
