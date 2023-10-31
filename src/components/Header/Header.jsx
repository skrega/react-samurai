import React from "react";
import Logo from './../../logo.svg';
import s from './Header.module.scss';
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";

const Header = (props) => {
  return <header className={s.header}>
    <div className="container">
      <div className={s.headerInner}>
        <img className="App-logo" src={Logo} alt=""/>
        <div className={s.loginBlock}>
          { props.isAuth ? 
            props.login : 
            <NavLink to={'/login'} className={s.loginBtn}><Avatar src="/broken-image.jpg" /></NavLink>}
        </div>
      </div>
    </div>
  </header>
}

export default Header;