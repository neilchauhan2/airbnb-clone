import React, { Component } from "react";
import Home from "../homes/Home";

class Place extends Component {
  render() {
    return (
      <div className="container is-fluid">
        <h1 className="is-size-3">Places to live in India</h1>
        <div className="columns is-multiline">
          <Home />
          <Home />
          <Home />
          <Home />
          <Home />
          <Home />
          <Home />
          <Home />
        </div>
      </div>
    );
  }
}

export default Place;
