import React from "react";
import '../styles.css';

function GodTile({ god }) {

  return (
  <div className="card">
    <div>
      <div className="card-body">
        {/* <h5 className="card-title">{god.name}</h5> */}
        <img className="card-image" src={god.url}/>
      </div>
    </div>
  </div>
  )
}

export default GodTile;