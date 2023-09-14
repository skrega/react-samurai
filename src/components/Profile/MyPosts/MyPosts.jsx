import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import Button from '@mui/material/Button';
const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
  
  let newPostElement = React.createRef() // Создаем ссылку и связываем с textarea, вместо getElementById

  let addPost = () =>{
    props.addPost()
  }
  
  let onPostChange =() => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }
  return (
    <div className='content'>
      <div className={s.post__block}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea className={s.addPostTextarea}
                      ref={newPostElement}
                      onChange={onPostChange}
                      value={props.newPostText}/>
          </div>
          <div>
            <Button variant="contained"  onClick={ addPost }>Add post</Button>
          </div>
        </div>
        <div className={s.posts}>
          { postsElements }
        </div>
      </div>
    </div>
  )
}

export default MyPosts;