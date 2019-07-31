import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import LocationHomes from "./components/locations/LocationHomes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/location/:code" component={LocationHomes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
