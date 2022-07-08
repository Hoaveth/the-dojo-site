import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
import Temple from "../assets/temple.svg";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </li>
        <button className="btn">Logout</button>
      </ul>
    </div>
  );
}

export default Navbar;
