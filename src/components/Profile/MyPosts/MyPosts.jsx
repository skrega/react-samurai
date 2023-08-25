import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

  let  posts = [
    {id: 1,message: 'Hi, how are you?', likesCount: 9,},
    {id: 2,message: 'Its my first post', likesCount: 12,},
  ];

  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
  
  return (
    <div className='content'>
      <div className={s.post__block}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea name="" id=""></textarea>
          </div>
          <div><button className="btn">Add post</button></div>
        </div>
        <div className={s.posts}>
          { postsElements }
        </div>
      </div>
    </div>
  )
}

export default MyPosts;