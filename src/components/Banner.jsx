import React from 'react';
import FotoGuitar from '../assets/statics/chico-guitarra.svg';
import Micro from '../assets/statics/microphone.svg';

import '../assets/styles/components/Banner.scss';


const Banner = () => {
 
  return (
    <section className="banner">
      <div className="banner__info">
        <h1 data-aos="fade-right" >
          Descarga el estudio <br /> de <span className="highlight">TikTok España</span>
        </h1>
        <p data-aos="fade-right">
          Inscribete y recibe un estudio sobre el impacto de TikTok en España y su <br />
          importancia para lorar mayor visibilidad y publico para tu negocio.
        </p>

        <form data-aos="fade-left">
          <label for="nombre">
            <p>Nombre</p>
            <input name="nombre" />
          </label>

          <label for="empresa">
            <p>Empresa</p>
            <input name="empresa" />
          </label>

          <label for="teléfono">
            <p>Teléfono</p>
            <input name="teléfono" />
          </label>

          <label for="email">
            <p>Email</p>
            <input name="email" />
          </label>

          <a className="btn-primary">Enviar</a>
        </form>
      </div>
      <div className="banner__img ">
        <img className="img-micro" src={Micro} alt="microphone" data-aos="fade-up" />
        <img src={FotoGuitar} alt="chico-guitarra" data-aos="fade-down"  />
      </div>
    </section>
  );
};

export default Banner;
