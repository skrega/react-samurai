import React from "react";
import {sendMessageCreator,updateNEwMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer> 
      {(store) => {
          let state = store.getState().dialogsPage
  
          let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator())
          }
        
          let onNewMessageChange = (body) => {
            store.dispatch(updateNEwMessageBodyCreator(body))
          }
          return <Dialogs updateNEwMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
        }
      }
  </StoreContext.Consumer>
  )

}

export default DialogsContainer;