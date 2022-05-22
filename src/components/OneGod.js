import React from "react";
import '../styles.css';

function OneGod({ god }) {

  const deleteCard = '×'

  return (
    <div className="card-container">
        <div className="card" key={god.id}> 
            <img 
            className="card-image" 
            src={god.url} 
            alt={"Statue of " + god.name}
            />
            <div className="card-body">
                    <hr className="line"></hr>
                    <h2>{god.name}</h2>
            </div>
        </div>
    </div>
    // <div> 
    // <h1>Details</h1>
    //   <div className="card-container">
    //       <div className="card"> 
    //           <img 
    //           className="card-image" 
    //           src={god.url} 
    //           alt={"Statue of " + god.name}
    //           />
    //           <div className="card-body">
    //                   <hr className="line"></hr>
    //                   <h2>{god.name}</h2>
    //           </div>
    //       </div>
    //     </div>
    //   <div className="card">
    //     <div className="card-info">
    //       <h2>{"Power"}</h2>
    //       <p>{god.power}</p>
    //       <h2>{"Symbol"}</h2>
    //       <p>{god.symbol}</p>
    //       <h2>{"Roman Name"}</h2>
    //       <p>{god.romanname}</p>
    //     </div>
    //     <button className="deleteX">{deleteCard}</button>
    //   </div>
    // </div>
  );
}
export default OneGod;