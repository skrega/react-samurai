import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  // console.log(props.message);
  // debugger;
  return (
    <div className={s.item}>
      <div className={s.item__head}>
        <img
          src="https://assets-prd.ignimgs.com/2022/11/22/avatar-blogroll2-1669090391194.jpg"
          alt=""/>
         {props.message}
      </div>
      <div className={s.item__buttons}>
        <div>
          <span>like</span> 
          {/* добавить кол-во лайков */}
        </div>
      </div>
    </div>
  )
}

export default Post;