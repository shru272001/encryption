import React from "react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Navbar = (props) => {
  const links = props.auth.uid ? <SignedIn/>:<SignedOut/>
  return (
    <nav className="nav-wraper black darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Keep it hush!
          </Link>
          {links}
        </div>
      </nav>
   
  
  );
};
const mapStateToProps = (state)=>{
  return{
    auth : state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navbar);
