import React from "react";
import { NavLink } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import '../styles.css';

function NavBar() {

  // const location = useLocation();

  // const currentURL = (url) => {
  //     return location.pathname.toLowerCase() === url.toLowerCase();
  // }
  
  // const addButton = () => {
  //   if(currentURL === "/gods/new"){
  //     return (
  //       <nav className="nav-menu">
  //         <NavLink end to="/gods">Gods</NavLink>
  //         <NavLink end to="/gods/favorites">Favorites</NavLink>
  //       </nav>
  //     )
  //   } else {
  //     return (
  //       <nav className="nav-menu">
  //         <NavLink end to="/gods">Gods</NavLink>
  //         <NavLink end to="/gods/favorites">Favorites</NavLink>
  //         <NavLink end to="/gods/new" className='add-god'>Add God</NavLink>
  //       </nav>
  //     )
  //   }
  // }

  return (
      <nav className="nav-menu">
        <NavLink end to="/gods">Gods</NavLink>
        <NavLink end to="/gods/favorites">Favorites</NavLink>
        <NavLink end to="/gods/new" className='add-god'>Create God</NavLink>
      </nav>
  );
}

export default NavBar;
