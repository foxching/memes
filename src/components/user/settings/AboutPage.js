import React from "react";

const AboutPage = () => {
  return (
    <div className="card card-body">
      <h3>About Me</h3>
      <hr className="divider" />
      <span className="text-left">
        Complete your profile to get the most out of this site
      </span>
      <form>
        <div className="row">
          <div
            className="form-group col-md-8"
            style={{ marginTop: "-12px", marginBottom: "-15px" }}
          >
            <label style={{ fontSize: "12px", fontWeight: "bold", margin: 0 }}>
              Tell us your status:
            </label>
            <label className="radio-inline">
              <input type="radio" name="optradio" checked />
              Single
            </label>
            <label className="radio-inline">
              <input type="radio" name="optradio" />
              Relationship
            </label>
            <label className="radio-inline">
              <input type="radio" name="optradio" />
              Married
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            Tell us about yourself
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="About Me"
          />
        </div>
        <div className="row">
          <div className="form-group col-md-6 ">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Occupation"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12 ">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Country of Origin"
            />
          </div>
        </div>
        <hr className="divider" />
        <button type="submit" className="btn btn-success disabled ">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default AboutPage;
