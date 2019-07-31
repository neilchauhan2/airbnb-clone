import React, { Component } from "react";

export class HomePhotos extends Component {
  render() {
    return (
      <div className="">
        <div class="tile is-marginless is-ancestor">
          <div class="tile is-marginless is-4 is-vertical is-parent">
            <div class="tile is-marginless is-child ">
              <figure class="image is-5by3">
                <img
                  alt=""
                  src="https://bulma.io/images/placeholders/640x480.png"
                />
              </figure>
            </div>
            <div class="tile is-marginless is-child">
              <figure class="image is-5by3">
                <img
                  alt=""
                  src="https://bulma.io/images/placeholders/640x480.png"
                />
              </figure>
            </div>
          </div>
          <div class="tile is-marginless is-parent">
            <div class="tile is-marginless is-child ">
              <figure class="image is-5by3">
                <img
                  alt=""
                  src="https://bulma.io/images/placeholders/640x480.png"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePhotos;
