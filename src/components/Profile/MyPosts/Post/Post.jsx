import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  // console.log(props.message);
  // debugger;
  return (
    <div className={s.item}>
      <div className={s.item__head}>
        <img
          src="https://belon.club/uploads/posts/2023-04/1681431996_belon-club-p-krasivie-kotiki-instagram-1.jpg"
          alt=""/>
         {props.message}
      </div>
      <div className={s.item__buttons}>
        <div className={s.item__likes}>
          <span>like </span> {props.likesCount}
          {/* добавить кол-во лайков */}
        </div>
      </div>
    </div>
  )
}

export default Post;