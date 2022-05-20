import React, { useState } from "react";
import '../styles.css';
import FavStar from "./FavStar";

function Card({ god }) {
    const [hiddenInfo, setHiddenInfo] = useState(true)

    const circle = '●'

    const test = (e) => {
        console.log(e.target.value)
    }

    return (
    <div className="card" value={god.name} onClick={() => test()}>
        <div>
        {hiddenInfo ? <img className="card-image" src={god.url} alt={"Statue of " + god.name} key={god.id}/> :
            <div className="card-info">
                <h2>{"Power"}</h2>
                <p>{god.power}</p>
                <h2>{"Symbol"}</h2>
                <p>{god.symbol}</p>
                <h2>{"Roman Name"}</h2>
                <p>{god.romanname}</p>
            </div>
            }
        <div className="card-body">
            <div className="circ">{circle}</div>
            <FavStar god={god} key={god.id} />
            <hr className="line"></hr>
            <h2>{god.name}</h2>
        </div>
        </div>
    </div>
    )
}

export default Card;