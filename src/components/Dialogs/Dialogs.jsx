import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

  let state = props.dialogsPage

  let dialodElements = state
    .dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);
  let messagesElements = state
    .messages
    .map(m => <Message message={m.message}/>);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialodElements}
      </div>
      <div className={s.messages}>
        <div className={s.messagesElements}>
          {messagesElements}
        </div>
        <div className={s.addMessagesInner}>
          <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
      </div>
    </div>

  )
}
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className={s.addInputMessage}
        placeholder="Введите сообщение"
        component="textarea"
        name="newMessageBody"/>
      <button className="btn btn-primary">Отправить</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;