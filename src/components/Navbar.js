import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
import Temple from "../assets/temple.svg";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { logout, isPending } = useLogout();

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
        {!isPending && (
          <button className="btn" onClick={logout}>
            Logout
          </button>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
