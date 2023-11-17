import React from "react";
import {Field, reduxForm} from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}> 
      <div><Field type="text" placeholder="Login"  name="login" component={Input}
      validate={[required]}
      /></div>
      <div><Field type="text" placeholder="password" name="password"  component={Input} validate={[required]}/></div>
      <div><Field type="checkbox" component={Input} name="rememberMe" />
        remember me</div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return <div>
    <h1>Login</h1>
    {/* <LoginForm/> */}
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

export default LoginPage;