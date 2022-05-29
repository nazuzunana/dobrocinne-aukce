import React, { useState } from 'react';
import './style.css';
import validator from 'validator';

// registrační formulář

const Registration = () => {
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (e) => {
    const email = e.target.value;

    // validátor hesla - fukčný :)

    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('zadejte platný e-mail');
    }
  };

  const validatePassword = (e) => {
    const password = e.target.value;

    if (validator.isStrongPassword(password)) {
      setPasswordError('silné heslo');
    } else {
      passwordError('není dostatečně silné heslo');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Uživatel „${userName}“ se chce zaregistrovat.`);
  };
  const jeUserNamePrazdne = userName.length === 0;
  const jeLastNamePrazdne = userLastName.length === 0;
  const jeUserPhone = userPhone.length === 0;

  return (
    <div className="container__registration">
      <div className="">Už u nás máte účet? Přihlaste se tady.</div>
      <form onSubmit={handleSubmit}>
        <h3 className="registration__title">Registrace</h3>
        <div className="form_container">
          <h4 className="">Přihlašovací údaje</h4>
          <label>
            <span>E-mail: </span>
            <input type="email" onChange={(e) => validateEmail(e)}></input>{' '}
            <p
              style={{
                color: 'red',
              }}
            >
              {emailError}
            </p>
          </label>
          <label>
            Heslo:
            <input
              type="password"
              onChange={(e) => validatePassword(e)}
            ></input>{' '}
            <p
              style={{
                color: 'red',
              }}
            >
              {passwordError}
            </p>
          </label>
          <label>
            Heslo znovu:
            <input type="password" />
          </label>
        </div>
        <div className="form_container">
          <h4 className="">Osobní údaje</h4>
          <label>
            Křestní jméno:
            <input
              type="text"
              value={userName}
              onChange={(event) => {
                const vstup = event.target.value;
                console.log(vstup);
                setUserName(vstup);
              }}
            />
          </label>
          {jeUserNamePrazdne && <div>Křestní jméno je povinný údaj.</div>}
          <label>
            Příjmení:
            <input
              type="text"
              value={userLastName}
              onChange={(event) => {
                const vstup1 = event.target.value;
                console.log(vstup1);
                setUserLastName(vstup1);
              }}
            />
          </label>

          {jeLastNamePrazdne && <div>Příjmení je povinný údaj.</div>}
          <label>
            Příjmení:
            <input
              type="text"
              value={userLastName}
              onChange={(event) => {
                const vstup1 = event.target.value;
                console.log(vstup1);
                setUserLastName(vstup1);
              }}
            />
          </label>

          {jeLastNamePrazdne && <div>Příjmení je povinný údaj.</div>}
          <label>
            Telefon:
            <input
              type="number"
              value={userPhone}
              onChange={(event) => {
                const vstup4 = event.target.value;
                console.log(vstup4);
                setUserPhone(vstup4);
              }}
            />
          </label>

          {jeUserPhone && <p>Telefon je povinný údaj.</p>}
        </div>

        <div className="form_container">
          <h4>Organizace</h4>
          <label>
            Název organizace: <input type="text" />
          </label>
          <label>
            IČO: <input type="number" />
          </label>
          <label>
            DIČ: <input type="number" />
          </label>
        </div>
      </form>
    </div>
  );
};
export default Registration;

/*  <button type="submit" disabled={jeUserNamePrazdne}>
Registrovat
</button> */
