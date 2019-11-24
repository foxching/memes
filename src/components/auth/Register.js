import React from "react";
import "./Login.css";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h1 className="text-left">Register Here</h1>
          <p>
            Memes-Shirt is a web app that enables you to build your favorite
            design t-shirt memes .you can make your cuztomise t-shirt design and
            saved it. To enable saving you must provide your credentials first
          </p>
        </div>
        <div className="col-md-5 bg-light py-4">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-left">Registration Form</h3>
            </div>
            <div className="col-md-6">
              <FontAwesomeIcon
                icon={faPencilAlt}
                style={{ fontSize: "35px", float: "right", marginTop: "5px" }}
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
        </div>
      </div>
    </div>
  );
};

export default Register;
