import React from "react";
import s from './Users.module.scss';
import { Button } from "@mui/material";

let Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://img.freepik.com/premium-vector/cartoon-happy-beaver-on-white-background_194935-62.jpg',
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                },
                followed: false
            },
            {
                id: 2,
                photoUrl: 'https://koshka.top/uploads/posts/2021-12/1640316382_1-koshka-top-p-narisovannikh-kotikov-1.jpg',
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {
                    city: 'Moscow',
                    country: 'Belarus'
                },
                followed: true
            },
            {
                id: 3,
                photoUrl: 'https://flomaster.top/uploads/posts/2022-07/thumbs/1656832433_44-flomaster-club-p-milie-risunki-korgi-krasivo-44.png',
                fullName: 'Yulik',
                status: 'I am a mamaboss',
                location: {
                    city: 'Vladivostok',
                    country: 'Russia'
                },
                followed: true
            },
        ])
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
            { u.followed
              ? <Button variant="outlined" onClick={() => {props.unfollow(u.id)}}>Unfollow</Button>
              : <Button variant="contained" onClick={() => {props.follow(u.id)}}>follow</Button> }

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