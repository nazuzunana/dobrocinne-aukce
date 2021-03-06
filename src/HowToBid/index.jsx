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
              Pro možnost přihazovat na předměty v aukcích si{' '}
              <a href="/Registration" className="how-to-bod__link">
                založte uživatelský učet
              </a>
              .
            </p>
          </div>
        </div>
        <div className="how-to-bid__step">
          <div className="how-to-bid__icon auction"></div>
          <div className="step_instructions">
            <p>
              Po registraci a přihlášení můžete přihazovat na předměty v{' '}
              <a href="/AuctionList" className="how-to-bod__link">
                aktuálních aukcích
              </a>
              .
            </p>
          </div>
        </div>
        <div className="how-to-bid__step">
          <div className="how-to-bid__icon bid"></div>
          <div className="step_instructions">
            <p>
              Na předměty lze přihazovat opakovaně. Minimální výše příhozu
              závisí na aktuální ceně předmětu (podmínky přihazování níže).
              Maximální výše příhozu není omezena.
            </p>
          </div>
        </div>
        <div className="how-to-bid__step">
          <div className="how-to-bid__icon winning-bid"></div>
          <div className="step_instructions">
            <p>
              Po uplynutí času aukce předmět vyhrává dražitel s nejvyšším
              příhozem.
            </p>
          </div>
        </div>
        <div className="how-to-bid__step">
          <div className="how-to-bid__icon mail"></div>
          <div className="step_instructions">
            <p>
              V případě vydražení předmětu obdržíte na e-mailovou adresu, kterou
              jste uvedli při registraci, email s poděkováním a instrukcemi k
              dalšímu postupu.
            </p>
          </div>
        </div>
      </div>
      <div className="how-to-bid__description">
        <div className="description__article">
          <div className="description__title">
            <p>Podmínky přihazování</p>
          </div>
          <div className="description__text">
            <p>
              Nejnižší příhoz k ceně <span className="bold">1-500 Kč</span> je{' '}
              <span className="bold">20 Kč</span>.<br />
              Nejnižší příhoz k ceně <span className="bold">
                500-5 000 Kč
              </span>{' '}
              je <span className="bold">100 Kč</span>. <br />
              Nejnižší příhoz k ceně{' '}
              <span className="bold">5 000-10 000 Kč</span> je{' '}
              <span className="bold">500 Kč</span>. <br />
              Nejnižší příhoz k ceně{' '}
              <span className="bold">10 000-50 000 Kč</span> je{' '}
              <span className="bold">1 000 Kč</span>. <br />
              Nejnižší příhoz k ceně{' '}
              <span className="bold">50 000-100 000 Kč</span> je{' '}
              <span className="bold">5 000 Kč</span>. <br />
              Nejnižší příhoz k ceně{' '}
              <span className="bold">100 000-500 000 Kč</span> je{' '}
              <span className="bold">10 000 Kč</span>. <br />
              Nejnižší příhoz k ceně{' '}
              <span className="bold">500 000-1 000 000 Kč</span> je{' '}
              <span className="bold">50 000 Kč</span>. <br />
              Nejnižší příhoz k ceně{' '}
              <span className="bold">1 000 000-50 000 000 Kč</span> je{' '}
              <span className="bold">100 000 Kč</span>. <br />
              Nejnižší příhoz k ceně nad{' '}
              <span className="bold">50 000 000 Kč</span> je{' '}
              <span className="bold">200 000 Kč</span>. <br />
            </p>
          </div>
        </div>
        <div className="description__article">
          <div className="description__title">
            <p>Platba za vydražené předměty</p>
          </div>
          <div className="description__text">
            <p>
              Po vydražení předmětu obdržíte na e-mailovou adresu, kterou jste
              uvedli při registraci, e-mail s fakturou a instrukcemi k platbě.
            </p>
          </div>
        </div>
        <div className="description__article">
          <div className="description__title">
            <p>Převzetí vydražených předmětů</p>
          </div>
          <div className="description__text">
            <p>
              Vydražené předměty si je po uhrazení faktury možné vyzvednout
              osobně na adrese: Letohradská 711/10, 170 00 Praha 7-Holešovice
              během otevírací doby: Út - Ne: 11:00 - 21:00 či jindy po dohodě na
              tel: +420 606 125 203 či na e-mail: info@ngodei.org.
              <br />
              <br />
              Po domluvě lze vydražené předměty zaslat. Výběr dopravce a cena
              dopravy závisí na velikosti a povaze jednotlivých předmětů.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowToBid;
