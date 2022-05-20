import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import '../styles.css';
import HomePage from "./HomePage";
import FavPage from "./FavPage";
import FormPage from "./FormPage"

function MainContainer() {
  const [gods, setGods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/gods")
    .then((r) => r.json())
    .then((gods) => setGods(gods));
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/favorites">
          <FavPage />
        </Route>
        <Route path="/form">
          <FormPage />
        </Route>
        <Route exact path="/">
          <HomePage gods={gods} />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;