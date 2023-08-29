import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink className={s.dialogItem} to={path}>
        <div>
          <img className={s.dialogImg} src={props.img} alt={`user ${props.id}`}/>
        </div>
        <div className={s.dialogContent}>
          <div className={s.dialogName}>{props.name}</div>
          <div className={s.dialogLastMess}>last message</div>
        </div>

      </NavLink>
    </div>
  )
}
export default DialogItem;