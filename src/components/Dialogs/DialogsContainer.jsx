import React from "react";
import {sendMessageCreator, updateNEwMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {dialogsPage: state.dialogsPage}
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNEwMessageBody: () => {
      dispatch(sendMessageCreator())
    },
    sendMessage: (body) => {
      dispatch(updateNEwMessageBodyCreator(body))
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;