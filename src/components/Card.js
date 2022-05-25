import React, { useState } from "react";
import '../styles.css';
import { Link } from "react-router-dom"

function Card({ god }) {
    const [liked, setLiked] = useState(true);

    const fullStar = '★'
    const emptyStar = '☆'

    const starred = liked ? emptyStar : fullStar

    function handleClick() {
        setLiked(!liked)
    }

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
                    <button className="circ" onClick={handleClick}>{starred}</button>
                    <Link to={`/gods/${god.id}`}><button className="expand" id={god.id}>+</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card;