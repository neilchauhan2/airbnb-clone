import React, { Component } from "react";
import LocationColumn from "./LocationColumn";
import Delhi from "../../assets/new-delhi.jpg";
import Mumbai from "../../assets/mumbai.jpg";
import Kolkata from "../../assets/kolkata.jpg";
import Chennai from "../../assets/chennai.jpg";

class Location extends Component {
  render() {
    return (
      <div className="location">
        <div className="container is-fluid">
          <h3 className="is-size-3 location-text">Recommended for you </h3>
          <div className="columns">
            <LocationColumn image={Delhi} text={"New Delhi"} />
            <LocationColumn image={Mumbai} text={"Mumbai"} />
            <LocationColumn image={Kolkata} text={"Kolkata"} />
            <LocationColumn image={Chennai} text={"Chennai"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
