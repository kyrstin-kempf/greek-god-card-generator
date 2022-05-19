import React from "react";
import '../styles.css';
import { Route, useRouteMatch } from "react-router-dom";

function Form() {

  const match = useRouteMatch();
  console.log(match);

  return (
    <div className="formpage"> 
    <h1>So You Want To Add A God?</h1>
    <p>Fill out the form to create a god card</p>
      {/* <MoviesList movies={movies} />
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      <Route path={`${match.url}/movieId`}>
        <MovieShow movies={movies} />
      </Route> */}
    </div>
  );
}
export default Form;