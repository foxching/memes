import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BasicPage extends Component {
  state = {
    startDate: ""
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="card card-body">
        <h3>Basics</h3>
        <hr className="divider" />
        <form>
          <div className="row">
            <div className="form-group col-md-6 ">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Known as"
              />
            </div>
          </div>
          <div className="row">
            <div
              className="form-group col-md-6"
              style={{ marginTop: "-12px", marginBottom: "-15px" }}
            >
              <label style={{ fontSize: "16px", margin: 0 }}>Gender:</label>
              <label className="radio-inline">
                <input type="radio" name="optradio" checked />
                Male
              </label>
              <label className="radio-inline">
                <input type="radio" name="optradio" />
                Female
              </label>
            </div>
          </div>
          <div className="row">
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              className="datepicker"
              placeholderText="Birth Date"
            />
          </div>

          <div className="row">
            <div className="form-group col-md-12 ">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Home Address"
              />
            </div>
          </div>

          <hr className="divider" />
          <button type="submit" className="btn btn-success  ">
            Update Profile
          </button>
        </form>
      </div>
    );
  }
}

export default BasicPage;
