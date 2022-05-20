import React from "react";
import '../styles.css';
import FavStar from "./FavStar";

function FavsPage() {

  return (
    <div className="favspage"> 
    <h1>Your Favs</h1>
    <p>For easy reference</p>
    <FavStar />
    </div>
  );
}
export default FavsPage;