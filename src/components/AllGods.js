import React from "react";
import '../styles.css';
import Card from "./Card";

function AllGods({ gods }) {
  
  return (
    <div className="homepage"> 
    <h1>Guess My Power</h1>
    <p>Click on a god to reveal more details</p>
    <br/>
    {gods.map((god) => (
        <Card 
        key={god.id} 
        god={god}
       />
    ))}
    </div>
  );
}
export default AllGods;