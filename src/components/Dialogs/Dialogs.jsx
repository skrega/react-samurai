import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialodElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>); 
  let messagesElements = props.state.messages.map( m => <Message message={m.message}/>);  

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>  
        { dialodElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>

  )
}

export default Dialogs;