import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css';

function Card({ god }) {
    const [liked, setLiked] = useState(true);

    const circle = '●'
    const fullStar = '★'
    const emptyStar = '☆'

    const starred = liked ? emptyStar : fullStar

    const navigate = useNavigate();

    function handleClick() {
        setLiked(!liked)
    }   

    function handleGod(e) {
        console.log(e.target)
        const thisGod = e.target.id
        navigate(`/gods/${thisGod}`)
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