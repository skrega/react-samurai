import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.poster}>
        <img
          src="https://bogatyr.club/uploads/posts/2021-11/1636920747_1-bogatyr-club-p-fon-dlya-prilozheniya-1.jpg"
          alt=""/>
      </div>
      <div className={s.description__block}>ava + descr</div>
    </div>
  )
}

export default ProfileInfo;