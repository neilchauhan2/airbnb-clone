import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div className="card search-box">
        <div className="card-content">
          <div className="content">
            <h1 className="is-size-3">
              Book unique places to stay and things to do.
            </h1>
            <div className="form">
              <div class="field search-box-input">
                <label class="label">WHERE</label>
                <div class="control">
                  <div class="select is-fullwidth">
                    <select>
                      <option>Select </option>
                      <option>New Delhi</option>
                      <option>Mumbai</option>
                      <option>Chennai</option>
                      <option>Kolkata</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">
            <button class="button search-box-btn is-link is-fullwidth">
              Search
            </button>
          </div>
        </footer>
      </div>
    );
  }
}

export default SearchBox;
