import React from 'react';
import CreativeIMG from '../assets/statics/creative.svg';

import '../assets/styles/components/Creative.scss';

const Creative = () => {
  return (
    <section className="creative">
      <div className="crea__img" data-aos="fade-right">
        <img src={CreativeIMG} alt="creative" />
      </div>

      <div className="crea__info">
        <div className="desc"  data-aos="fade-left">
          <h2>Creatividad</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          </p>
        </div>
        <div className="desc" data-aos="fade-left">
          <h2>Gran impacto</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          </p>
        </div>

        <div className="desc" data-aos="fade-left">
          <h2>Análisis de eficacia</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          </p>
        </div>
      </div>
    </section>
  );
};

export default Creative;
