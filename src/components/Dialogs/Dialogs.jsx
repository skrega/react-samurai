import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import Button from '@mui/material/Button';

const Dialogs = (props) => {

  let dialodElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>); 
  let messagesElements = props.state.messages.map( m => <Message message={m.message}/>);  

  let inputAddMessage = React.createRef();

  let addMessage = () => {
    let message = inputAddMessage.current.value;
    alert(message);
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
          <textarea name="" className={s.addInputMessage} ref={ inputAddMessage } placeholder="Введите сообщение"></textarea>
          <Button variant="contained" onClick={ addMessage }>Отправить</Button>
        </div>
      </div>
    </div>

  )
}

export default Dialogs;