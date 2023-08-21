import React from "react";
import Logo from './../../logo.svg';
import s from './Header.module.css';

const Header = () => {
  return <header className={s.header}>
    <img className="App-logo" src={Logo} alt=""/>
  </header>
}

export default Header;