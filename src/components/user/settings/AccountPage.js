import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  combineValidators,
  composeValidators,
  isRequired,
  matchesField
} from "revalidate";
import TextInput from "../../../common/form/TextInput";

const validate = combineValidators({
  newPassword1: isRequired({ message: "You need to enter your passsword" }),
  newPassword2: composeValidators(
    isRequired({ message: "Please confirm your password" }),
    matchesField("newPassword1")({ message: "Password dont matches" })
  )()
});

const AccountPage = ({
  error,
  invalid,
  submitting,
  handleSubmit,
  updatePassword
}) => {
  return (
    <div className="card card-body">
      <h3>Account</h3>
      <hr className="divider" />
      <span className="text-uppercase text-info">Change Password</span>
      <span className="text-left mb-3">
        Use this form to update your account settings
      </span>
      <form onSubmit={handleSubmit(updatePassword)}>
        <Field
          name="newPassword1"
          width={6}
          type="password"
          component={TextInput}
          placeholder="New Password"
        />
        <Field
          name="newPassword2"
          width={6}
          type="password"
          component={TextInput}
          placeholder="Confirm Password"
        />
        {error && (
          <small basic color="red">
            {error}
          </small>
        )}
        <hr className="divider" />
        <button
          type="submit"
          className="btn btn-success"
          disabled={invalid || submitting}
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default reduxForm({ form: "account", validate })(AccountPage);
