import React from "react";
import { NavLink } from "react-router-dom";
const SignedOut = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">About</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOut;
