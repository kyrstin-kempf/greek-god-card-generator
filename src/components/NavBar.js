import React from "react";
import '../styles.css';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-menu">
      <NavLink to="/" 
      exact activeStyle={{
        border: "2px solid #0d5c63",
        color: "#0d5c63",
        backgroundColor: "white",
        }}>
        Home
      </NavLink>
      <NavLink to="/form"
     exact activeStyle={{
        border: "2px solid #0d5c63",
        color: "#0d5c63",
        backgroundColor: "white",
        }}>
        Form
      </NavLink>
    </div>
  );
}

export default NavBar;
