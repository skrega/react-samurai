import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

  let postsElements = props
    .posts
    .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let addPost = (values) => {
    props.addPost(values.addPostMessage);
  }

  return (
    <div className='content'>
      <div className={s.post__block}>
        <h3>My posts</h3>
        <AddPostFormRedux onSubmit={addPost}/>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  )
}

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          className={s.addPostTextarea}
          placeholder="Введите текст"
          name="addPostMessage"/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
const AddPostFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm)

export default MyPosts;