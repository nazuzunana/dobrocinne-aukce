import React, { useState } from 'react';
import './style.css';
import validator from 'validator';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

// registrační formulář

const Registration = () => {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordAgainError, setPasswordAgainError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [ico, setIco] = useState('');
  const [dic, setDic] = useState('');
  const [invoiceStreet, setInvoiceStreet] = useState('');
  const [invoiceCity, setInvoiceCity] = useState('');
  const [invoicePsc, setInvoicePsc] = useState('');
  const [invoiceCountry, setInvoiceCountry] = useState('');
  const [userLand, setUserLand] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userPostcode, setUserPostcode] = useState('');
  const [userStreet, setUserStreet] = useState('');
  const [userPassportDate, setUserPassportDate] = useState('');
  const [userPassport, setUserPassport] = useState('');

  const [newsletterAccepted, setNewsletterAccepted] = useState(false);
  const [gdprAccepted, setGdprAccepted] = useState(false);

  const [registered, setRegistered] = useState(false);

  const validateEmail = (e) => {
    const email = e.target.value;

    // validátor e-mailu - funkčný :)

    if (validator.isEmail(email)) {
      setEmailError('');
      setEmail(email);
    } else {
      setEmailError('zadejte platný e-mail');
    }
  };

  const validatePassword = (e) => {
    const password = e.target.value;

    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10,
      })
    ) {
      setPasswordError('');
      setPassword(password);
    } else {
      setPasswordError(
        'Heslo musí obsahovat aspoň 8 znaků a jeden speciální znak.',
      );
    }
  };

  const validatePasswordAgain = (e) => {
    const passwordAgain = e.target.value;

    if (password !== passwordAgain) {
      setPasswordAgainError('Hesla nejsou totožná.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      emailError === '' &&
      passwordError === '' &&
      passwordAgainError === ''
    ) {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          setDoc(doc(db, 'users', user.uid), {
            email,
            userName,
            userLastName,
            userPhone,
            organisation,
            ico,
            dic,
            invoiceStreet,
            invoiceCity,
            invoicePsc,
            invoiceCountry,
            userLand,
            userCity,
            userPostcode,
            userStreet,
            userPassportDate,
            userPassport,
            newsletterAccepted,
            gdprAccepted,
          }).then(() => {
            setRegistered(true);
          });
        },
      );
    }
  };

  return registered ? (
    <div className="container__registration">
      <h2>Děkujeme za registraci!</h2>
      <p>Teď můžete vesele přihazovat na našich aukcích.</p>
    </div>
  ) : (
    <div className="container__registration">
      <h3 className="registration__title">Registrace</h3>
      <div className="">Už u nás máte účet? Přihlaste se tady.</div>
      <form onSubmit={handleSubmit}>
        <div className="form__container">
          <div className="form__title">Přihlašovací údaje</div>
          <label>
            <span className="form__label">E-mail*: </span>
            <input
              type="email"
              onBlur={(e) => validateEmail(e)}
              onFocus={() => setEmailError('')}
              required
            ></input>{' '}
            <p
              style={{
                color: 'red',
              }}
            >
              {emailError}
            </p>
          </label>
          <label>
            <span className="form__label">Heslo*: </span>
            <input
              type="password"
              onChange={(e) => validatePassword(e)}
              onFocus={() => setPasswordError('')}
              required
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
            <span className="form__label">Heslo znovu*: </span>
            <input
              type="password"
              onChange={(e) => validatePasswordAgain(e)}
              onFocus={() => setPasswordAgainError('')}
              required
            />
            <p
              style={{
                color: 'red',
              }}
            >
              {passwordAgainError}
            </p>
          </label>
        </div>
        <div className="form__container">
          <div className="form__title">Osobní údaje</div>
          <label>
            <span className="form__label">Křestní jméno*: </span>
            <input
              type="text"
              value={userName}
              onChange={(event) => {
                const vstup = event.target.value;
                setUserName(vstup);
              }}
              required
            />
          </label>
          <label>
            <span className="form__label">Příjmení*: </span>
            <input
              type="text"
              value={userLastName}
              onChange={(event) => {
                const vstup = event.target.value;
                setUserLastName(vstup);
              }}
              required
            />
          </label>
          <label>
            <span className="form__label">Telefon*: </span>
            <input
              type="tel"
              value={userPhone}
              onChange={(event) => {
                const vstup4 = event.target.value;
                setUserPhone(vstup4);
              }}
              required
            />
          </label>
        </div>

        <div className="form__container">
          <div className="form__title">Organizace</div>
          <label>
            <span className="form__label">Název organizace: </span>{' '}
            <input
              type="text"
              value={organisation}
              onChange={(event) => {
                const vstup = event.target.value;
                setOrganisation(vstup);
              }}
            />
          </label>
          <label>
            <span className="form__label">IČO: </span>{' '}
            <input
              type="text"
              value={ico}
              onChange={(event) => {
                const vstup = event.target.value;
                setIco(vstup);
              }}
            />
          </label>
          <label>
            <span className="form__label">DIČ: </span>{' '}
            <input
              type="text"
              value={dic}
              onChange={(event) => {
                const vstup = event.target.value;
                setDic(vstup);
              }}
            />
          </label>
        </div>

        <div className="form__container">
          <div className="form__title">Fakturační adresa</div>
          <label>
            <span className="form__label">Ulice a číslo popisné*: </span>
            <input
              type="text"
              value={invoiceStreet}
              onChange={(event) => {
                const vstup = event.target.value;
                setInvoiceStreet(vstup);
              }}
              required
            />
          </label>
          <label>
            <span className="form__label">Město*: </span>
            <input
              type="text"
              value={invoiceCity}
              onChange={(event) => {
                const vstup1 = event.target.value;
                setInvoiceCity(vstup1);
              }}
              required
            />
          </label>
          <label>
            <span className="form__label">PSČ*:</span>
            <input
              type="text"
              value={invoicePsc}
              onChange={(event) => {
                const vstup = event.target.value;
                setInvoicePsc(vstup);
              }}
              required
            />
          </label>
          <label>
            <span className="form__label">Země*: </span>
            <input
              type="text"
              value={invoiceCountry}
              onChange={(event) => {
                const vstup4 = event.target.value;
                setInvoiceCountry(vstup4);
              }}
              required
            />
          </label>
        </div>
        <div className="form__container">
          <div className="form__title">Doručovací adresa</div>
          <p>(vyplňte pouze v případě, že se liší od fakturační adresy)</p>
          <label>
            <span className="form__label">Ulice a číslo popisné: </span>
            <input
              type="text"
              value={userStreet}
              onChange={(event) => {
                const vstup = event.target.value;
                setUserStreet(vstup);
              }}
            />
          </label>
          <label>
            <span className="form__label">Město: </span>
            <input
              type="text"
              value={userCity}
              onChange={(event) => {
                const vstup1 = event.target.value;
                setUserCity(vstup1);
              }}
            />
          </label>
          <label>
            <span className="form__label">PSČ: </span>
            <input
              type="text"
              value={userPostcode}
              onChange={(event) => {
                const vstup4 = event.target.value;
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
                setUserLand(vstup4);
              }}
            />
          </label>
        </div>
        <div className="form__container">
          <div className="form__title">Ověření totožnosti</div>
          <p>
            Dle dražebního zákona je každý účastník aukce povinen prokázat svoji
            totožnost, a to prostřednictvím občanského průkazu či cestovního
            pasu.
          </p>
          <label>
            <span className="form__label">Číslo dokladu*: </span>
            <input
              type="text"
              value={userPassport}
              onChange={(event) => {
                const vstup = event.target.value;
                setUserPassport(vstup);
              }}
              required
            />
          </label>
          <label>
            <span className="form__label">Platnost do*: </span>
            <input
              type="date"
              value={userPassportDate}
              onChange={(event) => {
                const vstup1 = event.target.value;
                setUserPassportDate(vstup1);
              }}
              required
            />
          </label>
        </div>
        <p>* povinné údaje</p>
        <div className="form__checkboxes">
          <label className="form__checkbox">
            <input
              type="checkbox"
              checked={newsletterAccepted}
              onChange={(event) => {
                setNewsletterAccepted(event.target.checked);
              }}
            />
            <span className="form__checkbox-text">
              Chci dostávat novinky a aktuální informace.{' '}
            </span>
          </label>
          <label className="form__checkbox">
            <input
              type="checkbox"
              checked={gdprAccepted}
              onChange={(event) => {
                setGdprAccepted(event.target.checked);
              }}
              required
            />
            <span className="form__checkbox-text">
              Souhlasím se zpracováním osobních údajů dle zákona č. 101/2000 Sb.
              o ochraně osobních údajů.{' '}
            </span>
          </label>
        </div>
        <button type="submit" className="registration__btn">
          Vytvořit účet
        </button>
      </form>
    </div>
  );
};
export default Registration;
