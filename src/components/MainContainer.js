import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import '../styles.css';
import HomePage from "./HomePage";
import FavPage from "./FavPage";
import FormPage from "./FormPage"

function MainContainer() {
  const [gods, setGods] = useState([]);
  const [myFavorites, setMyFavorites] = useState(true)
  const [liked, setLiked] = useState(true);

  const fullStar = '★'
  const emptyStar = '☆'

  const starred = liked ? emptyStar : fullStar
  
  const addGodToFavorites = (god) => {
        setLiked((liked) => !liked);
        console.log('add')
        if(!myFavorites.includes(god)){
        const updateFavs = [...myFavorites, god]
        setMyFavorites(updateFavs)
        }
    }
 
    
  useEffect(() => {
    fetch("http://localhost:3001/gods")
    .then((r) => r.json())
    .then((gods) => setGods(gods));
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/favorites">
          <FavPage gods={myFavorites} />
        </Route>
        <Route path="/form">
          <FormPage />
        </Route>
        <Route exact path="/">
          <HomePage gods={gods} starred={starred} handleClick={addGodToFavorites} />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;