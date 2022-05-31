import React from "react";
import '../styles.css';
import Card from "./Card";

function AllGods({ gods, sortByAlphabet }) {
  
  const godList = gods.map((god) => <Card key={ god.id } god={ god } />)

  function clickSort() {
    // console.log("Hi")
    sortByAlphabet()
  }

  return (
    <div> 
    <h1>Guess My Power</h1>
    <p>Click the + to reveal more details</p>
    <br/>
    <button onClick={clickSort}>Sort Me</button>
    {godList}
    </div>
  );
}
export default AllGods;
