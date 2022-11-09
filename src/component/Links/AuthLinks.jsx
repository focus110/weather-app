import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const AuthLinks = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, logOut } = authContext;

  return (
    <ul className="flex items-center space-x-4">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">{`Hi ${user?.name}`}</Link>
      </li>
      <li>
        <button onClick={logOut}>Logout</button>
      </li>
    </ul>
  );
};

export default AuthLinks;
