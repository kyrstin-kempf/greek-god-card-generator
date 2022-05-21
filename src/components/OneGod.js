import React from "react";
import '../styles.css';
import Card from "./Card";

function OneGod({ gods }) {

  return (
    <div className="favpage"> 
    <h1>Details</h1>
      {/* <Card /> */}
      <div className="card">
        <div className="card-info">
          <h2>{"Power"}</h2>
          <p>{gods.power}</p>
          <h2>{"Symbol"}</h2>
          <p>{gods.symbol}</p>
          <h2>{"Roman Name"}</h2>
          <p>{gods.romanname}</p>
        </div>
      </div>
    </div>
  );
}
export default OneGod;