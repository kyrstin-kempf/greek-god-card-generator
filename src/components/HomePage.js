import React from "react";
import '../styles.css';
import Card from "./Card";

function HomePage({ gods, starred, handleClick }) {
  
  return (
    <div className="homepage"> 
    <h1>Guess My Power</h1>
    <p>Click on a god to reveal more details</p>
    <br/>
    {gods.map((god) => (
        <Card 
        key={god.id} 
        god={god}
        starred={starred}
        handleClick={handleClick} 
       />
    ))}
    </div>
  );
}
export default HomePage;