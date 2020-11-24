import React, { Component } from "react";
import {
  updatekey,

} from "../../store/actions/contentAction";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { withRouter } from "react-router";

class Key extends Component {
myfunction=()=> {
    setInterval(() => {
      this.props.updatekey();
    }, 119999.88);
  }

  handlesubmit = (e) => {
    e.preventDefault();

    //this.props.updatekey();
  
    console.log("done");
  };

  render() {
    const { project } = this.props;
    return (
      <div>
       {project &&
          project.map((pro) => {
            return (
              <div key={pro.id}>
                <p>{pro.id}</p>
                <p>{pro.keys}</p>
              </div>
            );
          })}

        <button onClick={this.myfunction} >update</button>
      </div>
    );
  }
}
const mapStateToProps = (state,ownProps) => {
  //console.log(ownProps)
  return {
    project: state.firestore.ordered.keyss,
  };
};
const mapDispatchToProps = (dispatch) => {

  return {

    updatekey: () => dispatch(updatekey()),
    
  };
};
export default withRouter(
  compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
      {
        collection: "keyss",
      },
    ])
  )(Key)
);
