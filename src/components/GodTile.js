import React, { useState } from "react";
import '../styles.css';

function GodTile({ god }) {
    const [hiddenInfo, setHiddenInfo] = useState(true)

    function handleInfo() {
        setHiddenInfo((hiddenInfo) => !hiddenInfo);
    }

    const renderDetails = () => {
        return (
        <div className="card-body">
            <div className="card-info">
                <p><b>{"Roman Name: "}</b>{god.romanname}</p>
                <p><b>{"Symbol: "}</b>{god.symbol}</p>
                <p><b>{"Power: "}</b>{god.power}</p>
            </div>
        </div>
        );
    }

    const tileDetail = hiddenInfo  ? null : renderDetails()

  return (
  <div className="card" onClick={handleInfo}>
    <div>
      <div className="card-body">
        <img className="card-image" src={god.url}/>
        <h2>{god.name}</h2>
        {tileDetail}
     </div>
    </div>
  </div>
  )
}

export default GodTile;