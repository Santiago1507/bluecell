import React, { useState } from 'react';
import Slider from '../assets/statics/slider_1.png';
import Creative from '../assets/statics/creative.svg';
import FotoGuitar from '../assets/statics/chico-guitarra.svg';
import LogoClient from '../assets/statics/logo-client.svg';
import Clip from '../assets/statics/clip_2.svg';

import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../assets/styles/components/OurClients.scss';

const items = [
  {
    src: Slider,
    altText: 'Slide 1',
  },
  {
    src: Creative,
    altText: 'Slide 2',
  },
  {
    src: FotoGuitar,
    altText: 'Slide 3',
  },
];

const OurClients = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  setTimeout(() => {
    let indicator = document.querySelectorAll('ol.carousel-indicators li');
    indicator.forEach((x) => {
      x.addEventListener('click', (e) => {
        indicator.forEach((state) => state.classList.remove('active'));
        e.target.classList.add('active');
      });
    });
  }, 0);

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const handleClick = () => {
  const popUp = document.getElementById('popUp');

  popUp.style === '' ? (popUp.style.display = 'none') : (popUp.style.display = 'flex');
};

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <section className="our-clients">
      <div className="content-build">
        <div className="our__desc">
          <h2 data-aos="fade-right">
            Contruimos tu <br /> plan de medios <br />
            en TikTok
          </h2>
          <span className="highlight " data-aos="fade-right">en 4 pasos</span>
          <a className="btn-primary " data-aos="fade-right" onClick={handleClick}>Comenzar</a>
        </div>

        <div className="content_carousel " data-aos="fade-left">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} onClickHandler={goToIndex} />
            {slides}
          </Carousel>
        </div>
      </div>

      <div className="content-clients" data-aos="fade-down">
        <h2>Nuestros Clientes</h2>
        <div className="clients">
          <img src={LogoClient} alt="logo-client" />
          <img src={LogoClient} alt="logo-client" />
          <img src={LogoClient} alt="logo-client" />
          <img src={LogoClient} alt="logo-client" />
          <img src={LogoClient} alt="logo-client" />
          <img src={LogoClient} alt="logo-client" />
          <img src={LogoClient} alt="logo-client" />
          <img src={LogoClient} alt="logo-client" />
        </div>
      </div>

      <img className="clip-img" src={Clip} alt="clip image" />
    </section>
  );
};

export default OurClients;
