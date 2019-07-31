import React, { Component } from "react";
import { Link } from "react-router-dom";
// import SignedInLinks from "./SignedInLinks";

class Navbar extends Component {
  componentDidMount = () => {
    document.addEventListener("DOMContentLoaded", () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    });
  };

  handleLogout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <header>
        <nav className="navbar " role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h1 className="is-size-4 ">
                <i class="fab fa-airbnb fa-2x logo" />
                <span className="is-size-3 logo-font">Airbnb Clone</span>
              </h1>
            </Link>

            <Link
              to="#"
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            {/* <div className="navbar-start">
              <SignedInLinks />
            </div> */}

            <div className="navbar-end">
              <Link className="navbar-item">Host a home</Link>
              <Link className="navbar-item">Help</Link>
              <Link className="navbar-item">Sign up</Link>
              <Link className="navbar-item">Login</Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
