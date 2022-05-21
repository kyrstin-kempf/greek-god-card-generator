import React from "react";
import { NavLink } from "react-router-dom";
import '../styles.css';

function NavBar() {
  return (
      <nav>
        <NavLink to="/">All Gods</NavLink>
        <NavLink to=":id">One God</NavLink>
        <NavLink to="new">New God</NavLink>
      </nav>
  );
}

export default NavBar;
