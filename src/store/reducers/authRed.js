const initstate = {
  authError: null,
};
const authRed = (state = initstate, action) => {
  switch (action.type) {
    case "LOGIN_ERR":
      console.log("login_err");
      return {
        ...state,
        authError: "login failed",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: "login success",
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    default:
      return state;
  }
};
export default authRed;
