import React, { Component } from "react";
import Villa from "../../assets/villa.jpg";

export class Home extends Component {
  render() {
    return (
      <section className="column is-3 section home is-marginless">
        <div className="container ">
          <figure class="image is-3by2">
            <img src={Villa} alt="" />
          </figure>
          <h2 className="subtitle is-size-6">ENTIRE APARTMENT . 1BED</h2>
          <h2 className="title is-size-5">Fruit Villa, South Delhi</h2>
        </div>
      </section>
    );
  }
}

export default Home;
