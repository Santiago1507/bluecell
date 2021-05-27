import React from 'react';
import BgImage from '../assets/statics/drew-graham.png';
import '../assets/styles/components/ContactUs.scss';

const handleClick = () => {
  const popUp = document.getElementById('popUp');

  popUp.style === '' ? (popUp.style.display = 'none') : (popUp.style.display = 'flex');
};

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="bg-contact">
        <img src={BgImage} />
      </div>
      <h3 data-aos="fade-up"> ¿Hablamos? </h3>
      <a href="#popUp" className="btn-secondary" onClick={handleClick} data-aos="fade-down">
        Contactar
      </a>
    </section>
  );
};

export default ContactUs;
