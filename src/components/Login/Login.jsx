import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from '../../redux/auth-reducer';
import {Navigate} from "react-router-dom";
import s from "./Login.module.scss"

const LoginForm = (props) => {
  return (
    <form className={s.formLogin} onSubmit={props.handleSubmit}>
      <div><Field
        type="text"
        placeholder="Email"
        name="email"
        component={Input}
        validate={[required]}/></div>
      <div><Field
        type="Password"
        placeholder="password"
        name="password"
        component={Input}
        validate={[required]}/></div>
      <div className={s.formLoginCheckbox}><Field type="checkbox" id="rememberMe" component={Input} name="rememberMe"/>
        <label for="rememberMe">Remember me</label>
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <div>
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Navigate to='/profile'/>
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}
const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {login})(LoginPage);
//b021ff43-59ed-4293-bce3-9db3cfeb70d4