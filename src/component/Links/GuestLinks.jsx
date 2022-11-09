import React from "react";
import { Link } from "react-router-dom";

const GuestLinks = () => {
  return (
    <ul className="flex items-center space-x-4">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
      <li>
        <Link to="/register">register</Link>
      </li>
    </ul>
  );
};

export default GuestLinks;
