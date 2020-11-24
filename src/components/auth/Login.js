import React, { Component } from "react";
import {connect} from 'react-redux'
import {signIn } from "../../store/actions/authAction"
import { Redirect } from "react-router-dom";
class Login extends Component {
  state = {
    email:"",
    password:"",
    code:""
  };
  handlechange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handlesubmit=(e)=>{
    e.preventDefault()
    this.props.signIn(this.state)
  }
  render() {
    const {authError,auth}=this.props
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div class="login">
      <div class="container">
        <form onSubmit={this.handlesubmit} class="signin white">
          <h5 class="grey-text text-darken-3">Sign In</h5>
          <div class="input-field">
            <i class="material-icons prefix">email</i>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handlechange} />
          </div>
          <div class="input-field">
          <i class="material-icons prefix">https</i>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handlechange} />
          </div>
         
        <div class="input-field">
            <button class="btn pink lighten-1 z-depth-0">Login</button>
          </div>
         <div class="red-text center">
           {authError ? <p>{authError}</p>:null}
         </div>
        </form>
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    authError : state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    signIn: (creds)=>dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
