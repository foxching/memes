import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authAction";

class Navbar extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <NavLink to="/" className="navbar-brand text-white">
            MEME'S SHIRT
          </NavLink>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarComponent"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarComponent">
            <ul className="navbar-nav ml-auto">
              {!isAuthenticated ? (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink to="/register">
                      <i
                        className="fa fa-user fa-lg nav-link"
                        style={{ fontSize: "18px", color: "white" }}
                      >
                        {" "}
                        Sign Up
                      </i>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login">
                      <i
                        className="fa fa-sign-in fa-lg nav-link"
                        style={{ fontSize: "18px", color: "white" }}
                      >
                        {" "}
                        Login
                      </i>{" "}
                    </NavLink>
                  </li>
                </React.Fragment>
              ) : (
                <li className="nav-item dropdown">
                  <div
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-smile fa-lg">Ching</i>
                  </div>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/settings">
                      Settings
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/login"
                      onClick={this.props.signOut}
                    >
                      Logout
                    </NavLink>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: !!state.firebase.auth.uid
});

const mapDispatch = {
  signOut
};

export default connect(
  mapStateToProps,
  mapDispatch
)(Navbar);
