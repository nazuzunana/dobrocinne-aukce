import React from 'react';
import './style.css';

// jak dražit

const HowToBid = () => {
  return (
    <div className="container__how-to-bid">
      <div className="how-to-bid__steps">
        <div className="how-to-bid__step">
          <div className="how-to-bid__icon form"></div>
          <div className="step_instructions">
            <p>
              Pro možnost přihazovat na předměty v aukcích si založte
              uživatelský učet.
            </p>
          </div>
        </div>
        <div className="how-to-bid__step">
          <div className="how-to-bid__icon mail"></div>
          <div className="step_instructions">
            <p>
              Vyčkejte na potvrzovací e-mail a potvrďte svoji registraci
              kliknutím na odkaz v e-mailu.
            </p>
          </div>
        </div>
        <div className="how-to-bid__step">
          <div className="how-to-bid__icon login"></div>
          <div className="step_instructions">
            <p>
              Po založení uživatelského účtu a potvrzení registrace se
              přihlaste.
            </p>
          </div>
        </div>
      </div>
      <div className="how to bid__description"></div>
    </div>
  );
};
export default HowToBid;
