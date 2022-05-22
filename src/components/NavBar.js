import React from "react";
import { NavLink } from "react-router-dom";
import '../styles.css';

function NavBar() {
  return (
      <nav className="nav-menu">
        <NavLink end to="/">Home</NavLink>
        <NavLink end to="/gods">All Gods</NavLink>
        <NavLink end to="/gods/new">New God</NavLink>
      </nav>
  );
}

export default NavBar;
