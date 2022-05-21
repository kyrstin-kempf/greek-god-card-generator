import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import '../styles.css';
import OneGod from "./OneGod";
import NewGod from "./NewGod";

function NavBar() {
  return (
    <div className="nav-menu">
      <nav>
        <Link exact activeclassname="active" to="/gods" >Gods</Link>
        <Link activeclassname="active" to="/gods/new">New God</Link>
        <Link activeclassname="active" to="/gods/:id">One God</Link>
      </nav>

      <Routes>
        <Route path=":id" element={<OneGod />} />
        <Route path="new" element={<NewGod />} />
      </Routes>

    </div>
  );
}

export default NavBar;

// return (
//   <div>
//     <nav>
//       <Link to="me">My Profile</Link>
//     </nav>

//     <Routes>
//       <Route path=":id" element={<UserProfile />} />
//       <Route path="me" element={<OwnUserProfile />} />
//     </Routes>
//   </div>
// );
// }