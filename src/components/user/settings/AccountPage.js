import React from "react";

const AccountPage = () => {
  return (
    <div className="card card-body">
      <h3>Account</h3>
      <hr className="divider" />
      <span className="text-uppercase text-info">Change Password</span>
      <span className="text-left mb-3">
        Use this form to update your account settings
      </span>
      <form>
        <div className="row">
          <div className="form-group col-md-6 ">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="New Password"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6 ">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <hr className="divider" />
        <button type="submit" className="btn btn-success disabled ">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default AccountPage;
