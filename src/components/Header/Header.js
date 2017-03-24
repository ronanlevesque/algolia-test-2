import React, { PropTypes } from 'react';
import ThemeSwitcherContainer from '../../containers/ThemeSwitcherContainer';
import './Header.css';

const Header = ({ title }) =>
  <header className="Header">
    <div className="Header-content">
      <svg className="Header-logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 24l3-9h-9l14-15-3 9h9l-14 15z"/></svg>
      <h1 className="Header-title">{title}</h1>
      <ThemeSwitcherContainer />
    </div>
  </header>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
