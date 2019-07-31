import React, { Component } from "react";
import Hero from "./Hero";
import Location from "../locations/Location";
import Place from "./Place";
class Homepage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Location />
        <Place />
      </div>
    );
  }
}

export default Homepage;
