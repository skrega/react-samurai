import React from 'react';
import {getAuthUserData} from "./auth-reducer"

const INITIALIZED_SECCESS = 'INITIALIZED_SECCESS'

let initialState = {
  initialized: false
}
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SECCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state
  }
}

export const initializedSeccess = () => ({type: INITIALIZED_SECCESS})

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  promise.then(() => {
    dispatch(initializedSeccess())
  })

}

export default appReducer;