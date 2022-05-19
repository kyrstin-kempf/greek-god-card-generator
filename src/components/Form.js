import React from "react";
import '../styles.css';
import { Route, useRouteMatch } from "react-router-dom";

function Form() {

  const match = useRouteMatch();
  console.log(match);

  return (
    <div className="formpage"> So You Want To Add A God?
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