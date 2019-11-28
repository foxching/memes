import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../store/actions/authAction";

class Navbar extends Component {
  render() {
    const { isAuthenticated } = this.props;
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
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarComponent">
            <ul className="navbar-nav ml-auto">
              {!isAuthenticated ? (
                <React.Fragment>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      <i
                        className="fa fa-user fa-lg"
                        style={{ fontSize: "18px", color: "white" }}
                      >
                        {" "}
                        Sign Up
                      </i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      <i
                        className="fa fa-sign-in fa-lg"
                        style={{ fontSize: "18px", color: "white" }}
                      >
                        {" "}
                        Login
                      </i>{" "}
                    </Link>
                  </li>
                </React.Fragment>
              ) : (
                <li className="nav-item dropdown">
                  <Link
                    to="/login"
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-smile fa-lg">Ching</i>
                  </Link>
                  <div class="dropdown-menu">
                    <Link className="dropdown-item" href="#">
                      Settings
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/login"
                      onClick={this.props.signOut}
                    >
                      Logout
                    </Link>
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
