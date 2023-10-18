import React from "react";
import s from './Users.module.scss';
import {Button} from "@mui/material";
import axios from "axios";
import userPhoto from "../../assets/images/user-placeholder.png"

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items)
        })
    }
  }
  render() {
    return <div>
      <button onClick={this.getUsers}>Get users</button>
      {this
        .props
        .users
        .map(u => <div key={u.id} className={s.userItem}>
          <div className={s.userHead}>
            <div className={s.userImg}>
              <img
                src={u.photos.small !== null
                ? u.photos.small
                : userPhoto}
                alt=""/>
            </div>
            <div>
              {u.followed
                ? <Button
                    variant="outlined"
                    onClick={() => {
                    this.props.unfollow(u.id)
                  }}>Unfollow</Button>
                : <Button
                  variant="contained"
                  onClick={() => {
                  this.props.follow(u.id)
                }}>follow</Button>}

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

}
export default Users;