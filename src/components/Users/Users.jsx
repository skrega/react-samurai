import React from "react";
import s from './Users.module.scss';
import {Button} from "@mui/material";
import userPhoto from '../../assets/images/user-placeholder.png'
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return <div>
    <div className={s.pagination}>
      {pages.map(p => { return <span className={props.currentPage === p && s.selectedPage}
          onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
      })}

    </div>
    {props.users.map(u => <div key={u.id} className={s.userItem}>
        <div className={s.userHead}>
          <div className={s.userImg}>
            <NavLink to={'/profile/'+ u.id}>
              <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
            </NavLink>
          </div>
          <div>
            {u.followed 
              ? <Button variant="outlined" size="small" onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/`+ u.id, {
                  headers: {
                    "API-KEY": '51b62d54-7206-491e-ac9b-10a5791532bc'
                  },  
                  withCredentials: true})
                    .then(response => {
                      if(response.data.resultCode === 0){
                        props.unfollow(u.id)
                      }
                  })
                }}
                    
                >Unfollow</Button>
              : <Button variant="contained" size="small" onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/`+ u.id, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": '51b62d54-7206-491e-ac9b-10a5791532bc'
                    }})
                    .then(response => {
                      if(response.data.resultCode === 0){
                        props.follow(u.id)
                      }
                  })
                }}
                  
                >follow</Button>
            }
          </div>
        </div>
        <div className={s.userContent}>
          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
          <div className={s.userLocation}>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </div>
        </div>
      </div>)
    }
  </div>
}

export default Users