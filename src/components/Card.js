import React, { useState } from "react";
import '../styles.css';

function Card({ god }) {
    const [liked, setLiked] = useState(true);

    const circle = '●'
    const fullStar = '★'
    const emptyStar = '☆'

    const starred = liked ? emptyStar : fullStar

    function handleClick() {
        setLiked(!liked)
    }   

    function handleGod(e) {
        console.log(e.target)
    }

    return (
        <div className="card-container" onClick={handleGod}>
            <div className="card" key={god.id}> 
                <img 
                className="card-image" 
                src={god.url} 
                alt={"Statue of " + god.name}
                />
                <div className="card-body">
                        <hr className="line"></hr>
                        <h2>{god.name}</h2>
                    <div className="circ">{circle}</div>
                    <div className="eStar" onClick={handleClick}>{starred}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;