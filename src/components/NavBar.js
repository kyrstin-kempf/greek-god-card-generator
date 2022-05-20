import React from "react";
import { NavLink } from "react-router-dom";
import '../styles.css';

function NavBar() {
  return (
    <div className="nav-menu">
      <NavLink exact activeClassName="active" to="/" >
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/form">
        Form
      </NavLink>
      <NavLink activeClassName="active" to="/favorites">
        Favorites
      </NavLink>
    </div>
  );
}

export default NavBar;
