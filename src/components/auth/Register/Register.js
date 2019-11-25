import React from "react";
import { Link } from "react-router-dom";
import {
  faPencilAlt,
  faPalette,
  faUpload,
  faShare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Register.css";

const Register = () => {
  return (
    <section className="container">
      <section className="row ">
        <section className="col-md-7 ">
          <h1 className="text-left">MEMES-SHIRT</h1>
          <br />
          <FontAwesomeIcon
            icon={faPalette}
            style={{ fontSize: "30px", float: "left", marginTop: "3px" }}
          />
          {""}
          <p>Create your favorite shirt design</p>
          <br />
          <br />
          <FontAwesomeIcon
            icon={faUpload}
            style={{ fontSize: "30px", float: "left", marginTop: "3px" }}
          />
          {""}
          <p>Save in our System</p>
          <br />
          <br />
          <FontAwesomeIcon
            icon={faShare}
            style={{ fontSize: "30px", float: "left", marginTop: "3px" }}
          />
          {""}
          <p>Share with others</p>
        </section>
        <section className="col-md-5 formContainer">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-left">Registration Form</h3>
            </div>
            <div className="col-md-6">
              <FontAwesomeIcon
                icon={faPencilAlt}
                style={{ fontSize: "30px", float: "right", marginTop: "3px" }}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <label className="label col-md-2 control-label">Email</label>
            <div className="col-md-10">
              <input
                type="email"
                className="form-control formInput"
                name="Email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row">
            <label className="label col-md-2 control-label">Password</label>
            <div className="col-md-10">
              <input
                type="password"
                className="form-control formInput"
                name="Password"
                placeholder="Password"
              />
              <input type="checkbox" />
              <small> Remember me</small>
            </div>
          </div>
          <div className="row">
            <label className="label col-md-2 control-label">Message</label>
            <div className="col-md-10">
              <textarea
                className="form-control formInput"
                placeholder="Why you join this app?"
              />
            </div>
          </div>
          <div className="row">
            <label className="label col-md-2 control-label">Gender</label>
            <div className="col-md-10">
              <input type="radio" value="male" />
              <small>Male</small>
              <input type="radio" value="female" />
              <small>Female</small>
            </div>
          </div>
          <a href="ching.html">
            <div className="btn btn-info">Submit</div>
          </a>
          <a href="ching.html">
            <div className="btn btn-warning">Cancel</div>
          </a>
          <h5>
            Already have an account?<Link to="/login">Login</Link>
          </h5>
        </section>
      </section>
    </section>
  );
};

export default Register;
