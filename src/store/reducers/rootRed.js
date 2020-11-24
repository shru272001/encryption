import { combineReducers } from "redux";
import authRed from "./authRed";
import projectRed from "./projectRed";
import { firestoreReducer } from "redux-firestore";
import {  firebaseReducer } from "react-redux-firebase";

const rootRed = combineReducers({
  auth: authRed,
  project: projectRed,
  firestore: firestoreReducer,
  firebase:firebaseReducer
});
export default rootRed;
