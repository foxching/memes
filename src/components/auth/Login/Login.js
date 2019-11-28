import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../../store/actions/authAction";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onHandleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const { props, state } = this;
    const authData = { ...state };

    props.signIn(authData);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <section className="container-fluid">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <form onSubmit={this.onHandleSubmit} className="form-container">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={this.onHandleChange}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={this.onHandleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
              <div className="container  text-center">
                {authError ? (
                  <small className="text-danger text-justify">
                    {authError}
                  </small>
                ) : null}
              </div>
            </form>
          </section>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatch = {
  signIn
};

export default connect(
  mapStateToProps,
  mapDispatch
)(Login);
