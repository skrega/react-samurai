import React from "react";
import s from './ProfileInfo.module.scss';
import Preloader from "../../common/Preloader/Preloader";

import userPhoto from '../../../assets/images/user-placeholder.png'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
  return (
    <div>
      <div className={s.poster}>
        <img
          src="https://bogatyr.club/uploads/posts/2021-11/1636920747_1-bogatyr-club-p-fon-dlya-prilozheniya-1.jpg"
          alt=""/>
      </div>
      <div className={s.description__block}>
        <div className={s.avatar}>
          <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} alt={props.profile.fullName} />
        </div>
        <div className={s.profile__info}>
          <h2>{props.profile.fullName}</h2>
          <p className={s.description}>{props.profile.aboutMe}</p>
        </div>
        
      </div>
    </div>
  )
}

export default ProfileInfo;