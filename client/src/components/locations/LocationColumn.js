import React, { Component } from "react";

class LocationColumn extends Component {
  render() {
    return (
      <div className="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by2">
              <img src={this.props.image} alt="" />
            </figure>
            <div class="card-content is-overlay ">
              <span class="is-size-4 has-text-white location-column-text">
                {this.props.text}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationColumn;
