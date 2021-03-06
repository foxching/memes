import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import SettingsNav from "./SettingsNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import AccountPage from "./AccountPage";
import { updateProfile } from "../../../store/actions/userAction";
import { updatePassword } from "../../../store/actions/authAction";

const SettingsDashboard = ({ user, updateProfile, updatePassword }) => {
  return (
    <div className="container py-4">
      <Helmet>
        <title>Settings - Basic</title>
        <meta name="description" content="Settings" />
      </Helmet>
      <div className="row">
        <div className="col col-md-9">
          <Switch>
            <Redirect exact from="/settings" to="/settings/basic" />
            <Route
              path="/settings/basic"
              render={() => (
                <BasicPage updateProfile={updateProfile} initialValues={user} />
              )}
            />
            <Route
              path="/settings/about"
              render={() => (
                <AboutPage updateProfile={updateProfile} initialValues={user} />
              )}
            />
            <Route
              path="/settings/account"
              render={() => <AccountPage updatePassword={updatePassword} />}
            />
          </Switch>
        </div>
        <div className="col col-md-3">
          <SettingsNav />
        </div>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    providerId: state.firebase.auth.providerData[0].providerId,
    user: state.firebase.profile
  };
};
const actions = {
  updatePassword,
  updateProfile
};

export default connect(
  mapState,
  actions
)(SettingsDashboard);
