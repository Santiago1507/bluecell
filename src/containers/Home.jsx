import React, { useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Creative from '../components/Creative';
import OurClients from '../components/OurClients';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import Aos from 'aos';

import '../assets/styles/App.scss';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Creative />
      <OurClients />
      <ContactUs />
      <Footer />
      <Popup />
    </>
  );
};

export default Home;
