import React, { Component } from "react";
import encrypt from '../../images/encrypt.jpg'
import decrypt from '../../images/decrypt.jpg'
import pp from '../../images/pp.jpg'
import M from 'materialize-css'
import para from '../../images/para.jpg'
import datapara from '../../images/datapara.jpg'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {withRouter} from 'react-router'
import {createkey} from '../../store/actions/contentAction'
class Explore extends Component {
  state = {
    Email:null,
    Message:null,
    Date:null,
    TypeOfService:null
  };
  handlechange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })

  }
  handlesubmit=(e)=>{
    e.preventDefault()
    this.props.createkey(this.state)
  }
  componentDidMount=()=>{
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tabs');
      var instance = M.Tabs.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instance = M.Datepicker.init(elems,{disableWeekends:true,autoClose:true});
    });
    
  }
  render() {
    return (
      <div >
        <header></header>
        <section class="container section" >
      
          <div class="row">
            <div class="col s12 l4">
              <img src={encrypt} alt="data encryption"class="side responsive-img materialboxed"/>
            </div>
            <div class="col s12 l6 offset-l1">
          <h2 class="indigo-text text-darken-4">Encryption</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          </p>
        </div>
        </div>
        <div class="row">
        <div class="col s12 l4 push-l7 offset-l1">
          <img
            src={decrypt}
            alt="Depryption"
            class="side responsive-img materialboxed"
          />
        </div>

        <div class="col s12 l6 pull-l5 right-align offset-l1">
          <h2 class="indigo-text text-darken-4">Decryption</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          </p>
        </div>
        </div>
        <div class="row">
            <div class="col s12 l4">
              <img src={pp} alt="paid partnership"class="side responsive-img materialboxed"/>
            </div>
            <div class="col s12 l6 offset-l1">
          <h2 class="indigo-text text-darken-4">Paid Partnership</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          </p>
        </div>
        </div>
        </section>


        <div class="parallax-container">
          <div class="parallax">
            <img src={para} alt="parallax" class="responsive-img"/>
          </div>
        </div>
       
       
       
        
  <section class="container section scrollspy" id="services">
      <div class="row">
        <div class="col s12 l4">
          <h2 class="indigo-text text-darken-4">What I do...</h2>
          <p>
            DATA-PRIVACY is our main motive. It can be personal or professional we give
            them equal importance... Your data is encrypted or protected to the core.
          </p>
        </div>

        <div class="col s12 l6 offset-l2">
          <ul class="tabs">
            <li class="tab col s6">
              <a href="#photography" class="indigo-text text-darken-4"
                >ENCRYPTION</a
              >
            </li>
            <li class="tab col s6">
              <a href="#editing" class="indigo-text text-darken-4">DECRYPTION</a>
            </li>
          </ul>
          <div class="col s12" id="photography">
            <p class="flow-text indigo-text text-darken-4">Encryption</p>
            <p>
              Data encryption translates data into another form, or code,so that only people
              with access to a secret key or password can read it.
            </p>
          </div>

          <div class="col s12" id="editing">
            <p class="flow-text indigo-text text-darken-4">Decryption</p>
            <p>
            The conversion of encrypted data into its original form is called Decryption. 
            It is generally a reverse process of encryption.
            </p>
          </div>
        </div>
      </div>
    </section>


    <div class="parallax-container">
          <div class="parallax">
            <img src={datapara} alt="parallax" class="responsive-img"/>
          </div>
        </div>




        <div class="section container scrollspy" id="contact">
      <div class="row">
        <div class="col s12 l5">
          <h2 class="indigo-text text-darken-4">
            Get in Touch
          </h2>
          <p>
            With our team work, we provide you with accuracy, thoroughness with the total of increasing Your
            productivity .At the end you will be inspired by our responsivness.
          </p>
        </div>
        <div class="col s12 l5 offset-l2">
          <form onSubmit={this.handlesubmit}>
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input onChange={this.handlechange}type="email" id="Email" />
              <label for="Email">Your email</label>
            </div> 

            <div class="input-field">
              <i class="material-icons prefix">message</i>
              <textarea
                onChange={this.handlechange}
                name=""
                id="Message"
                class="materialize-textarea"
              ></textarea>
              <label for="Message">Your message</label>
            </div>

            <div class="input-field">
            <i class="material-icons prefix">event_note</i>
              <input onChange={this.handlechange} type="date"  id="Date" />
              <label for="Date">choose a date</label>
            </div>

            <div class="input-field">
              <p>Services required....</p>
              <p>
                <label>
                  <input onChange={this.handlechange} value="EN" id="TypeOfService" type="checkbox" />
                  <span>Encryption</span>
                </label>
              </p>

              
              <p>
                <label>
                  <input onChange={this.handlechange} value="EN & DN" type="checkbox" id="TypeOfService"/>
                  <span>Encryption & Decryption</span>
                </label>
              </p>
            </div>
            <div onClick={()=>M.toast({html: 'Submitted'})}>
            <button class="btn">Submit</button></div>
            
          </form>
        </div>
      </div>
    </div>


    <footer class="page-footer grey darken-3">
      <div class="container">
        <div class="row">
          <div class="col s12 l6">
            <h5>About me</h5>
            <p>
            We are professionally certified programmers,we are not involved in
              any of the malpractices.Your data is purely protected from
              others.'PRIVACY' defines us.
            </p>
          </div>

          <div class="col s12 l4 offset-l2">
            <h5>Connect</h5>
            <ul>
              <li><a href="#" class="grey-text text-lighten-3">Facebook</a></li>
              <li>
                <a href="#" class="grey-text text-lighten-3">Instagram</a>
              </li>
              <li><a href="#" class="grey-text text-lighten-3">Twitter</a></li>
              <li>
                <a href="#" class="grey-text text-lighten-3">Linked In</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright grey darken-4">
        <div class="container center-align">
          &copy;  copyright 2020
        </div>
      </div>
    </footer>



      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    createkey:(privates)=>dispatch(createkey(privates))
  }
}

export default withRouter(
  compose(
  connect(null,mapDispatchToProps),
  firestoreConnect([
    {
      collection:"feedback"
    }
  ])
)(Explore));
