import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDdIGodCSIhGRK2lgb4XAtSMs0fauXWb7I",
  authDomain: "encrypt-c06e2.firebaseapp.com",
  databaseURL: "https://encrypt-c06e2.firebaseio.com",
  projectId: "encrypt-c06e2",
  storageBucket: "encrypt-c06e2.appspot.com",
  messagingSenderId: "22920996497",
  appId: "1:22920996497:web:2f7d5b434d53695dbf8130",
  measurementId: "G-C8Z7Z0B74E",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
