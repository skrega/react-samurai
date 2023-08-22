import React from "react";
import s from './Navbar.module.css';

const Navbar = () => {
  return <nav className='nav'>
    <div className={`${s.item} ${s.active}`}>
      <a className="link" href="/profile">
        Profile</a>
    </div>
    <div className={s.item}>
      <a className="link" href="/dialogs">
        Message</a>
    </div>
    <div className={s.item}>
      <a className="link">News</a>
    </div>
    <div className={s.item}>
      <a className="link">Music</a>
    </div>
    <div className={s.item}>
      <a className="link">Settings</a>
    </div>
  </nav>
}

export default Navbar;