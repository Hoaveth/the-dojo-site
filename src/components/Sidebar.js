import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/Sidebar.css";
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* Avatar and username later */}
          <p>Hello, User 1 </p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img
                  src={DashboardIcon}
                  alt="
                    dashboard-icon"
                />
                <span>Dashboard</span>
              </NavLink>
              <NavLink to="/create">
                <img
                  src={AddIcon}
                  alt="
                    add-icon"
                />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;