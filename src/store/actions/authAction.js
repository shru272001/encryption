export const signIn = (crendentials) => {
    console.log("action")
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
  
      firebase
        .auth()
        .signInWithEmailAndPassword(crendentials.email, crendentials.password)
        .then(() => {
          dispatch({ type: "LOGIN_SUCCESS" });
        })
        .catch((err) => {
          dispatch({ type: "LOGIN_ERR", err });
        });
    };
  };
  export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
  
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: "SIGNOUT_SUCCESS" });
        });
    };
  };