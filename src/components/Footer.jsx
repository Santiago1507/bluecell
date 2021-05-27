import React from 'react';

import '../assets/styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content__footer">
        <hr />
        <div className="dist-legal">
            <span className="logo">Bluecell</span>
            <div className="legal">
            <a href="#">Bases legales</a>
            <a href="#">politica de privacidad</a>
            <a href="#">politica de cookies</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
