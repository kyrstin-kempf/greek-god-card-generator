import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../styles.css';
import AllGods from "./AllGods";
import OneGod from "./OneGod";
import NewGod from "./NewGod"
import { BrowserRouter } from 'react-router-dom';

function MainContainer() {
  const [gods, setGods] = useState([]);
  const [myFavorites, setMyFavorites] = useState(true)
  
//   const addGodToFavorites = (god) => {
//        const newGods = gods.map(g => g.id === god.id ? {...g, liked: !g.liked} : g)
//         setGods(newGods)
//     }
 
    
  useEffect(() => {
    fetch('http://localhost:3001/gods')
    .then((r) => r.json())
    .then((gods) => setGods(gods));
  }, []);

  function handleAddGod(newGod) {
    // console.log("In ShoppingList:", newItem);
    setGods([...gods, newGod]);
  }

  return (
    <div>
        <Routes>
          <Route path="/gods/new" component={<NewGod />} />
          <Route path="/gods/:id" component={<OneGod />} />
          <Route path="/" component={<AllGods />} />
        </Routes>
    </div>
  );
}

export default MainContainer;