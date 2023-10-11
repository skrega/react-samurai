import React from "react";
import {sendMessageCreator, updateNEwMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {dialogsPage: state.dialogsPage,
    newMessageBody: state.dialogsPage.newMessageBody}
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNEwMessageBody: (body) => {
      dispatch(updateNEwMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;