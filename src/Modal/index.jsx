import React, { useState } from 'react';
import './style.css';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Modal({ setOpenModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      setOpenModal(false);
    });
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <p
          className="modalContainer__close"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Zavřít okno
        </p>
        <div className="title">
          <h4>Přihlásit se do účtu:</h4>
        </div>
        <form onSubmit={handleSubmit} className="body">
          <label>
            <span>Váš přihlašovací e-mail: </span>{' '}
            <input
              value={email}
              onChange={(event) => {
                const vstup = event.target.value;
                setEmail(vstup);
              }}
              type="email"
              required
            />
          </label>
          <label>
            <span>Vaše přihlašovací heslo: </span>{' '}
            <input
              value={password}
              onChange={(event) => {
                const vstup = event.target.value;
                setPassword(vstup);
              }}
              type="password"
              required
            />
          </label>
          <button type="submit" className="button__login">
            Přihlásit
          </button>
          <p>
            Nemáte účet?{' '}
            <a href="/Registration" className="modalContainer__register">
              Zaregistrujte se
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}

export default Modal;
