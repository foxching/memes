import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand text-white">
            MEME'S SHIRT
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarComponent"
          />
          <div className="collapse navbar-collapse" id="navbarComponent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  SIGN UP
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  LOGIN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
