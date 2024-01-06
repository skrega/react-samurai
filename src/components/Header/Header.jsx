import React from "react";
import Logo from './../../logo.svg';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {Avatar} from "@mui/material";

const Header = (props) => {
  return <header className={s.header}>
    <div className="container">
      <div className={s.headerInner}>
        <img className="App-logo" src={Logo} alt=""/>
        <div className={s.loginBlock}>
          {props.isAuth
            ? <div>{props.login} 
                <button className={s.headerLink} onClick={props.logout}>Выйти</button>
              </div>
            : <NavLink to={'/login'} className={s.loginBtn}><Avatar src="/broken-image.jpg"/></NavLink>}
        </div>
      </div>
    </div>
  </header>
}

export default Header;