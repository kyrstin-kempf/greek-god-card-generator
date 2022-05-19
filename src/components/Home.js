import React, { useEffect, useState } from "react";
import '../styles.css';
import GodTile from "./GodTile";

function Home() {
  const [gods, setGods] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3001/gods")
      .then((r) => r.json())
      .then((gods) => setGods(gods));
    }, []);

  return (
    <div className="homepage"> Guess Which God I Am
    <br/>
    <br/>
    {gods.map((god) => (
        <GodTile
        key={god.id}
        god={god}
        />
      ))}
    </div>
  );
}
export default Home;