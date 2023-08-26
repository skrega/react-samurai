import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialogsData = [
    {id:1, name: 'Dimych'},
    {id:2, name: 'Andrey'},
    {id:3, name: 'Julik'},
    {id:4, name: 'Arina'}
  ];
    
  let messagesData = [
    {id:1, message: 'hi'},
    {id:2, message: 'How is your it-kamasutra?'},
    {id:3, message: 'Yo'}
  ];

  let dialodElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>); 
  let messagesElements = messagesData.map( m => <Message message={m.message}/>);  

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