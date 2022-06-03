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
  const [newsletterAccepted, setNewsletterAccepted] = useState(false);
  const [gdprAccepted, setGdprAccepted] = useState(false);
  const [userPassportDate, setUserPassportDate] = useState('');
  const [userPassport, setUserPassport] = useState('');
  const [userLand, setUserLand] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userPostcode, setUserPostcode] = useState('');
  const [userStreet, setUserStreet] = useState('');

  const isUserNameEmpty = userName.length === 0;
  const isUserLastNameEmpty = userLastName.length === 0;
  const isUserPhoneEmpty = userPhone.length === 0;

  const validateEmail = (e) => {
    const email = e.target.value;

    // validátor e-mailu - funkčný :)

    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('zadejte platný e-mail');
    }
  };

  //validator hesla - nefunkčný?

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

  return (
    <div className="container__registration">
      <div className="">Už u nás máte účet? Přihlaste se tady.</div>
      <form onSubmit={handleSubmit}>
        <h3 className="registration__title">Registrace</h3>
        <div className="form_container">
          <h4 className="">Přihlašovací údaje</h4>
          <label>
            <span>E-mail*: </span>
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
            Heslo*:
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
            Heslo znovu*:
            <input type="password" />
          </label>
        </div>
        <div className="form_container">
          <h4 className="">Osobní údaje</h4>
          <label>
            Křestní jméno*:
            <input
              type="text"
              value={userName}
              onChange={(event) => {
                const vstup = event.target.value;
                console.log(vstup);
                setUserName(vstup);
              }}
              required
            />
          </label>
          <label>
            Příjmení*:
            <input
              type="text"
              value={userLastName}
              onChange={(event) => {
                const vstup1 = event.target.value;
                console.log(vstup1);
                setUserLastName(vstup1);
              }}
              required
            />
          </label>
          <label>
            Telefon*:
            <input
              type="number"
              value={userPhone}
              onChange={(event) => {
                const vstup4 = event.target.value;
                console.log(vstup4);
                setUserPhone(vstup4);
              }}
              required
            />
          </label>
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

        <div className="form_container">
          <h4 className="">Fakturační adresa</h4>
          <label>
            Ulice a číslo popisné*:
            <input
              type="text"
              value={userName}
              onChange={(event) => {
                const vstup = event.target.value;
                console.log(vstup);
                setUserName(vstup);
              }}
              required
            />
          </label>
          <label>
            Město*:
            <input
              type="text"
              value={userLastName}
              onChange={(event) => {
                const vstup1 = event.target.value;
                console.log(vstup1);
                setUserLastName(vstup1);
              }}
              required
            />
          </label>
          <label>
            PSČ*:
            <input
              type="number"
              value={userPhone}
              onChange={(event) => {
                const vstup4 = event.target.value;
                console.log(vstup4);
                setUserPhone(vstup4);
              }}
              required
            />
          </label>
          <label>
            Země*:
            <input
              type="text"
              value={userPhone}
              onChange={(event) => {
                const vstup4 = event.target.value;
                console.log(vstup4);
                setUserPhone(vstup4);
              }}
              required
            />
          </label>
        </div>
        <div className="form_container">
          <h4 className="">Doručovací adresa</h4>
          <p>vyplňte pouze v případě, že se liší od fakturační adresy</p>
          <label>
            Ulice a číslo popisné:
            <input
              type="text"
              value={userStreet}
              onChange={(event) => {
                const vstup = event.target.value;
                console.log(vstup);
                setUserStreet(vstup);
              }}
            />
          </label>
          <label>
            Město:
            <input
              type="text"
              value={userCity}
              onChange={(event) => {
                const vstup1 = event.target.value;
                console.log(vstup1);
                setUserCity(vstup1);
              }}
            />
          </label>
          <label>
            PSČ:
            <input
              type="number"
              value={userPostcode}
              onChange={(event) => {
                const vstup4 = event.target.value;
                console.log(vstup4);
                setUserPostcode(vstup4);
              }}
            />
          </label>
          <label>
            Země:
            <input
              type="text"
              value={userLand}
              onChange={(event) => {
                const vstup4 = event.target.value;
                console.log(vstup4);
                setUserLand(vstup4);
              }}
            />
          </label>
        </div>
        <div className="form_container">
          <h4 className="">Ověření totožnosti</h4>
          <p>
            Dle dražebního zákona je každý účastník aukce povinen prokázat svoji
            totožnost, a to prostřednictvím občanského průkazu či cestovního
            pasu.
          </p>
          <label>
            Číslo dokladu*:
            <input
              type="text"
              value={userPassport}
              onChange={(event) => {
                const vstup = event.target.value;
                console.log(vstup);
                setUserPassport(vstup);
              }}
              required
            />
          </label>
          <label>
            Platnost do*:
            <input
              type="text"
              value={userPassportDate}
              onChange={(event) => {
                const vstup1 = event.target.value;
                console.log(vstup1);
                setUserPassportDate(vstup1);
              }}
              required
            />
          </label>
        </div>
        <p>* povinné údaje</p>

        <label>
          <input
            type="checkbox"
            checked={newsletterAccepted}
            onChange={(event) => {
              setNewsletterAccepted(event.target.checked);
            }}
          />
          Chci dostávat novinky a aktuální informace.{' '}
        </label>
        <label>
          <input
            type="checkbox"
            checked={gdprAccepted}
            onChange={(event) => {
              setGdprAccepted(event.target.checked);
            }}
          />
          Souhlasím se zpracováním osobních údajů dle zákona č. 101/2000 Sb. o
          ochraně osobních údajů. <input type="submit" value="Vytvořit účet" />
        </label>
      </form>
    </div>
  );
};
export default Registration;

/*  <button type="submit" disabled={jeUserNamePrazdne}>
Registrovat    required
</button> */
