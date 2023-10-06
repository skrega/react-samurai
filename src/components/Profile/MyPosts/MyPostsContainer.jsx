import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

  // let state = props.store.getState().profilePage;
  return (
    <StoreContext.Consumer >
      {(store) => {
        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text)
          store.dispatch(action)
        }

        let state = store.getState()

        return <MyPosts
          updateNewPost={onPostChange}
          addPost={addPost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}/>
      }
}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;