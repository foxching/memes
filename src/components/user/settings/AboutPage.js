import React from "react";
import { Field, reduxForm } from "redux-form";
import RadioInput from "../../../common/form/RadioInput";
import TextInput from "../../../common/form/TextInput";
import Textarea from "../../../common/form/Textarea";

const AboutPage = ({
  pristine,
  submitting,
  invalid,
  handleSubmit,
  updateProfile
}) => {
  return (
    <div className="card card-body">
      <h3>About Me</h3>
      <hr className="divider" />
      <span className="text-left">
        Complete your profile to get the most out of this site
      </span>
      <form onSubmit={handleSubmit(updateProfile)}>
        <div className="row">
          <div
            className="form-group col-md-8"
            style={{ marginTop: "-12px", marginBottom: "-15px" }}
          >
            <label style={{ fontSize: "12px", fontWeight: "bold", margin: 0 }}>
              Tell us your status:
            </label>
            <Field
              type="radio"
              name="status"
              value="single"
              label="Single"
              component={RadioInput}
            />

            <Field
              type="radio"
              name="status"
              value="relationship"
              label="Relationship"
              component={RadioInput}
            />
            <Field
              type="radio"
              name="status"
              value="married"
              label="Married"
              component={RadioInput}
            />
          </div>
        </div>
        <Field
          name="about"
          type="textarea"
          placeholder="About Me"
          rows="6"
          component={Textarea}
        />
        <Field
          name="occupation"
          width={6}
          type="text"
          component={TextInput}
          placeholder="Occupation"
        />
        <Field
          name="country"
          width={12}
          type="text"
          component={TextInput}
          placeholder="Country of Origin"
        />
        <hr className="divider" />
        <button
          type="submit"
          className="btn btn-success"
          disabled={invalid || submitting || pristine}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "userProfile",
  enableReinitialize: true,
  destroyOnUnmount: false
})(AboutPage);
