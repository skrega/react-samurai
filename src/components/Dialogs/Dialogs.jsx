import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Field, reduxForm} from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

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

const maxLength100 = maxLengthCreator(100); 

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className={s.addInputMessage}
        placeholder="Введите сообщение"
        component={Textarea}
        validate={[required, maxLength100]}
        name="newMessageBody"/>
      <button className="btn btn-primary">Отправить</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;