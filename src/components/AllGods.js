import React from "react";
import '../styles.css';
import Card from "./Card";

function AllGods({ gods }) {
  
  const godList = gods.map((god) => <Card key={ god.id } god={ god } />)

  return (
    <div> 
    <h1>Guess My Power</h1>
    <p>Click the + to reveal more details</p>
    <br/>
    {godList}
    </div>
  );
}
export default AllGods;