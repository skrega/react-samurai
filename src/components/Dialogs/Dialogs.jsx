import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import Button from '@mui/material/Button';

const Dialogs = (props) => {

  let state = props.dialogsPage

  let dialodElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>); 
  let messagesElements = state.messages.map( m => <Message message={m.message}/>);  

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body =  e.target.value;
    props.updateNEwMessageBody(body);
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>  
        { dialodElements }
      </div>
      <div className={s.messages}>
        <div className={s.messagesElements}>
          { messagesElements }
        </div>
        <div className={s.addMessagesInner}>
          <textarea className={s.addInputMessage} placeholder="Введите сообщение" 
                    onChange={ onNewMessageChange }
                    value={newMessageBody}></textarea>
          <Button variant="contained" onClick={ onSendMessageClick }>Отправить</Button>
        </div>
      </div>
    </div>

  )
}

export default Dialogs;