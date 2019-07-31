import React, { Component } from "react";
import Home from "../homes/Home";

export class LocationHomes extends Component {
  render() {
    return (
      <div className="columns is-multiline">
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
      </div>
    );
  }
}

export default LocationHomes;
