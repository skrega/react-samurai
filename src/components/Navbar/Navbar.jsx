import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          className={({isActive}) => isActive
          ? `${s.active}`
          : ""}
          to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={({isActive}) => isActive
          ? `${s.active}`
          : ""}>Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          className={({isActive}) => isActive
          ? `${s.active}`
          : ""}
          to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          className={({isActive}) => isActive
          ? `${s.active}`
          : ""}
          to="/music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          className={({isActive}) => isActive
          ? `${s.active}`
          : ""}
          to="/settings">Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          className={({isActive}) => isActive
          ? `${s.active}`
          : ""}
          to="/users">Find users</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;