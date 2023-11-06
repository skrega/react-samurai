import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import axios from "axios";
import {getAuthUserData} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  isUserAuth = (id) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/${id}?count=1`, 
      {withCredentials: true }
      )
      .then(response => {
        console.log(response)
      })
  }
  render() {
    return  <Header {...this.props} isUserAuth={this.isUserAuth} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);