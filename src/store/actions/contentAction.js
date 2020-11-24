export const updatekey = () => {
  return (dispatch, getState, { getFirebase }) => {
    const db = getFirebase().firestore();
    db.collection("keyss")
     .doc("sy9aFqHQvyajXRELtbde")
      .set({
           keys:Math.floor(Math.random() * 26) + 1
          })
      .then(() => {
        dispatch({
          type: "UPDATE_KEY",
        });
      });
  };
};
export const createkey = (privates) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
    .collection("feedback")
    .add({
      ...privates,
    })
      .then(() => {
        dispatch({
          type: "ADD_KEY",
          privates,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_KEY_ERR",
          privates,
        });
      });
  };
};

