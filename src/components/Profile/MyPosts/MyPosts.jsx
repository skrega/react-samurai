import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className='content'>
      <div>
        My posts
        <div>
          <textarea name="" id=""></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Post message='Hi, how are you?' />
          <Post message='Its my first post' />
        </div>
      </div>
    </div>
  )
}

export default MyPosts;