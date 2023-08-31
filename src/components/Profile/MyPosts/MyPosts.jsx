import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
  
  let newPostElement = React.createRef() // Создаем ссылку и связываем с textarea

  let addPost = () =>{
    let text = newPostElement.current.value
    alert(text)
  }

  return (
    <div className='content'>
      <div className={s.post__block}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea className={s.addPostTextarea}  ref={newPostElement}></textarea>
            {/* <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
              <TextField id="outlined-multiline-flexible" label="Multiline" multiline maxRows={4}/>
            </Box> */}
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