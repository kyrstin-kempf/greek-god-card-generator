import '../styles.css';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Form from "./Form";
import Home from "./Home";

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/form">
          <Form />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;