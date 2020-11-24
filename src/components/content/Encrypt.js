import React, { Component } from "react";
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {withRouter} from 'react-router'
import M from'materialize-css'
import {Redirect} from 'react-router-dom'
class Encrypt extends Component {
  state = {
    
    msg: "",
    ouput:null
  };
  handlechange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    e.preventDefault();
   
    var pos = 0,
      newpos = "",
      newchar = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const key = this.props.encryptkey
    var newmsg = "";
    const message = this.state.msg;
    var i;
    for (i = 0; i < message.length; i++) {
      pos = alphabet.indexOf(message[i]);
      newpos = (pos + key) % 26;
      newchar = alphabet[newpos];
      newmsg += newchar;
    }
    this.setState({
      output:newmsg
    })

  };

  render() {
  const {auth}=this.props
  if (!auth.uid) return <Redirect to="/login"></Redirect>;
    return (
      <div class="red darken-1">
      <div class="encrypt z-depth-5">
     <div class="card-hh white  ">
       <form  onSubmit={this.handlesubmit}>
         <h4>ENCRYPTION</h4>
          <div className="input-field ">
            <label htmlFor="msg">Enter message</label>
            <input type="text" id="msg" onChange={this.handlechange} />
          </div>
          <div class="flow-text black center white-text" onCopy={()=>M.toast({html: 'You COPYED this text'})}>
          {this.state.output}
          </div>
          <br></br>
          <button class="btn">Submit</button>
        </form>
        
      </div>
      </div>
      <div class="row ">
        <div class="col s12 m6">
          <div class="card-down red darken-1 white-text z-depth-4">
           <h3> Monthly Subscription 
            Encryption & Decryption</h3>
            <p class="substext">
              <h6>Package Rate : $2300</h6>
              Both Encryption and Decryption are given as a service for the whole month.
              The storage and security is the responsibility of administrator.
            </p>
          </div>
          </div>

          <div class="col s12 m6">
          <div class="card-down red darken-1 white-text z-depth-4">
           <h3 > 90 Days Subscription 
            Encryption & Decryption</h3>
            <p class="substext">
              <h6 >Package Rate : $5300</h6>
              Both Encryption and Decryption are given as a service for the whole month.
              The storage and security is the responsibility of administrator.
            </p>
          </div>
</div>
        </div>
        <div class="footer-copyright grey darken-1">
        <div class="container center-align">
          &copy;  copyright 2020
        </div>
      </div>
      </div>
      
    );
  }
}
const mapStateToProps=(state,ownProps)=>{
  const encryptKey = state.firestore.data.keyss?
   state.firestore.data.keyss.sy9aFqHQvyajXRELtbde?state.firestore.data.keyss.sy9aFqHQvyajXRELtbde.keys:null:null
 
  return {
    encryptkey:encryptKey,
    auth: state.firebase.auth
  }
}
//export default connect(mapStateToProps)(Encrypt)
export default withRouter(
  compose(
  connect(mapStateToProps,null),
  firestoreConnect([
    {
      collection:"keyss"
    }
  ])
  )(Encrypt));
