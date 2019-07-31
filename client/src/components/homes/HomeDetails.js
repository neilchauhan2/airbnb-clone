import React, { Component } from "react";
import HomePhotos from "./HomePhotos";
import HomeContent from "./HomeContent";

export class HomeDetails extends Component {
  render() {
    return (
      <div>
        <HomePhotos />
        <div className="container">
          <div className="columns">
            <HomeContent />
            <HomeContent />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeDetails;
