import React, { useState } from "react";
import '../styles.css';

function Card({ god, handleClick, starred }) {
    const [info, setInfo] = useState(true);

    const circle = '●'

    function handleInfo() {
        setInfo((info) => !info);
    }

    const showInfo = () => {
        return (
            <div className="card-info">
                <h2>{"Power"}</h2>
                <p>{god.power}</p>
                <h2>{"Symbol"}</h2>
                <p>{god.symbol}</p>
                <h2>{"Roman Name"}</h2>
                <p>{god.romanname}</p>
            </div>
        );
    }

    const showImage = () => {
        return (
            <img 
            className="card-image" 
            src={god.url} 
            alt={"Statue of " + god.name}
            />
        );
    }

    const details = info ? showImage() : showInfo()

    return (
    <div className="card" key={god.id} onClick={handleInfo}>
        <div> 
        {details}
        <div className="card-body">
            <div className="circ">{circle}</div>
            <div className="eStar" key={god.id} onClick={handleClick}>{starred}</div>
            <hr className="line"></hr>
            <h2>{god.name}</h2>
        </div>
        </div>
    </div>
    )
}

export default Card;