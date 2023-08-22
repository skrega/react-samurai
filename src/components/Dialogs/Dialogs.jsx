import React from "react";
import s from './Dialogs.module.sass';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        <div className={`${s.dialog} ${s.active}`}>Dimych</div>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Julia</div>
        <div className={s.dialog}>Julia</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your it-kamasutra</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>

  )
}

export default Dialogs;