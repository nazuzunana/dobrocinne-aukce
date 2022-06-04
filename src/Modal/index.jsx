import React from 'react';
import './style.css';

function Modal({ setOpenModal }) {
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
        <div className="body">
          <label>
            <span>Váš přihlašovací e-mail: </span> <input type="email" />
          </label>
          <label>
            <span>Vaše přihlašovací heslo: </span> <input type="password" />
          </label>
          <button className="button__login">Přihlásit</button>
          <p>
            Nemáte účet?{' '}
            <a href="/Registration" className="modalContainer__register">
              Zaregistrujte se
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
