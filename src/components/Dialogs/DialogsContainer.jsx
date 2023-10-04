import React from "react";
import {sendMessageCreator,updateNEwMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage
 
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNEwMessageBodyCreator(body))
  }
  return <Dialogs updateNEwMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>

}

export default DialogsContainer;