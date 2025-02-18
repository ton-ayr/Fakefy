import React from 'react';
import logoSpotify from '../assets/logo/spotify-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="" />
      </Link>
    <Link to="/" className="header__link">
        <h1>Fakefy</h1>
    </Link>
  </div>
  );
};

export default Header;