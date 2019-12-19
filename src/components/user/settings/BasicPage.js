import React, { Component } from "react";
import moment from "moment";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../../common/form/TextInput";
import RadioInput from "../../../common/form/RadioInput";
import RenderDatePicker from "../../../common/form/DateInput";

class BasicPage extends Component {
  componentDidMount() {
    console.log(this.props.initialValues);
  }

  render() {
    const {
      pristine,
      submitting,
      invalid,
      handleSubmit,
      updateProfile
    } = this.props;
    return (
      <div className="card card-body">
        <h3>Basics</h3>
        <hr className="divider" />
        <form onSubmit={handleSubmit(updateProfile)}>
          <Field
            name="displayName"
            width={6}
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <div className="row">
            <div
              className="form-group col-md-8"
              style={{ marginTop: "-15px", marginBottom: "-20px" }}
            >
              <label style={{ fontSize: "14px", margin: 0 }}>Gender:</label>
              <Field
                type="radio"
                name="gender"
                value="male"
                label="Male"
                component={RadioInput}
              />
              <Field
                type="radio"
                name="gender"
                value="female"
                label="Female"
                component={RadioInput}
              />
            </div>
          </div>

          <Field
            name="birthday"
            dateFormat="L"
            dateFormatCalendar="dddd"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            normalize={value =>
              value ? moment(value).format("YYYY-MM-DD") : null
            }
            component={RenderDatePicker}
            placeholder="Birth Date"
            maxDate={moment()}
          />

          <Field
            width={12}
            name="address"
            type="text"
            component={TextInput}
            placeholder="Home Adress"
          />
          <hr className="divider" />
          <button
            type="submit"
            className="btn btn-success "
            disabled={invalid || submitting || pristine}
          >
            Update Profile
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "userProfile",
  enableReinitialize: true,
  destroyOnUnmount: false
})(BasicPage);
