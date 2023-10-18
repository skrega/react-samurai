import React from "react";
import s from './Users.module.scss';
import {Button} from "@mui/material";
import axios from "axios";

let Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUsers()
      })
  }
  return <div>
    {props
      .users
      .map(u => <div key={u.id} className={s.userItem}>
        <div className={s.userHead}>
          <div className={s.userImg}>
            <img src={u.photoUrl} alt=""/>
          </div>
          <div>
            {u.followed
              ? <Button
                  variant="outlined"
                  onClick={() => {
                  props.unfollow(u.id)
                }}>Unfollow</Button>
              : <Button
                variant="contained"
                onClick={() => {
                props.follow(u.id)
              }}>follow</Button>}

          </div>
        </div>
        <div className={s.userContent}>
          <div>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </div>
          <div className={s.userLocation}>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </div>
        </div>
      </div>)
}
  </div>
}

export default Users;