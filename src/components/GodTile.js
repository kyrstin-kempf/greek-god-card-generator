import React, { useState } from "react";
import '../styles.css';

function GodTile({ god }) {
    const [hiddenInfo, setHiddenInfo] = useState(true)

    return (
    <div className="card" 
    onClick={() => setHiddenInfo(!hiddenInfo)}
    >
        {hiddenInfo ? <img className="card-image" src={god.url} alt={"Statue of " + god.name} /> :
            <div className="card-info">
                <h2>{"Roman Name"}</h2>
                <p>{god.romanname}</p>
                <h2>{"Symbol"}</h2>
                <p>{god.symbol}</p>
                <h2>{"Power"}</h2>
                <p>{god.power}</p>
            </div>
            }
        <div className="card-body">
            <h2>{god.name}</h2>
        </div>
    </div>
    )
}

export default GodTile;