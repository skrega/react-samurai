import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return <div>
    <div className={s.poster}>
      <img
        src="https://bogatyr.club/uploads/posts/2021-11/1636920747_1-bogatyr-club-p-fon-dlya-prilozheniya-1.jpg"
        alt=""/>
    </div>
    <div>ava + descr</div>
    <MyPosts/>
  </div>
}

export default Profile;