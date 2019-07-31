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
            <LocationColumn url={"delhi"} image={Delhi} text={"New Delhi"} />
            <LocationColumn url={"mumbai"} image={Mumbai} text={"Mumbai"} />
            <LocationColumn url={"kolkata"} image={Kolkata} text={"Kolkata"} />
            <LocationColumn url={"chennai"} image={Chennai} text={"Chennai"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
