import React, { Component } from "react";
import SearchBox from "./SearchBox";
class Hero extends Component {
  render() {
    return (
      <div>
        <section class="hero is-fullheight">
          <div class="hero-body">
            <div class="container">
              <SearchBox />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
