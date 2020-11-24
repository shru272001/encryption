import React from "react";
import { Link } from "react-router-dom";
import {signOut} from "../../store/actions/authAction"
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
const SignedIn = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/encrypt">Encrypt</NavLink>
      </li>
      <li>
        <NavLink to="/decrypt">Decrypt</NavLink>
      </li>
     <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      
      </ul>
  );
};
const mapDispatchToProps =(dispatch)=>{
  return{
    signOut : ()=> dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedIn);
