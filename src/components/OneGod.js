import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../styles.css';

const OneGod = ({ gods, deleteGod }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteCard = '×'

  function handleDelete() {
    // console.log('clicked')

    fetch(`http://localhost:3001/gods/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(data => deleteGod(id))
    .then(newGod => navigate('/'))
  }

  return (
    <div>
      {gods
        .filter(god => god.id == id)
        .map(god => (
          <div key={god.id}>
          <div className="card-container-two">
            <div className="card">
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
          <div className="card-container-two">
            <div className="card-details">
                <div className="delete-icon" title="delete god" onClick={handleDelete}>{deleteCard}</div>
              <div className="card-info">
                <h2>Power</h2>
                <p>{god.power}</p>
                <h2>Symbol</h2>
                <p>{god.symbol}</p>
                <h2>Roman Name</h2>
                <p>{god.romanname}</p>
              </div>
            </div>
          </div>
          </div>
        ))
        } 
    </div>
  );
}
export default OneGod;