import React, { Component } from "react";
import { Link } from "react-router-dom";
class LocationColumn extends Component {
  render() {
    return (
      <div className="column">
        <div class="card">
          <Link to={`location/${this.props.url}`}>
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
          </Link>
        </div>
      </div>
    );
  }
}

export default LocationColumn;
