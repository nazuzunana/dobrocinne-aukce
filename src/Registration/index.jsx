import React, { useState } from 'react';
import './style.css';

// registrační formulář

const Registration = () => {
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Uživatel „${userName}“ se chce zaregistrovat.`);
  };
  const jeUserNamePrazdne = userName.length === 0;
  const jeLastNamePrazdne = userLastName.length === 0;
  const jeUserEmail = userEmail.length === 0;
  const jeUserPhone = userEmail.length === 0;

  return (
    <div className="container__registration">
      <div className="">Už u nás máte účet? Přihlaste se tady.</div>
      <h3 className="registration__title">Registrace</h3>

      <form onSubmit={handleSubmit}>
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
            E-mail:
            <input
              type="email"
              value={userEmail}
              onChange={(event) => {
                const vstup3 = event.target.value;
                console.log(vstup3);
                setUserEmail(vstup3);
              }}
            />
          </label>

          {jeUserEmail && <div>E-mail je povinný údaj.</div>}
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
            IČO: <input type="text" />
          </label>
          <label>
            DIČ: <input type="text" />
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
