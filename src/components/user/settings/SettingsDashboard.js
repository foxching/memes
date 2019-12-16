import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SettingsNav from "./SettingsNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import AccountPage from "./AccountPage";

const SettingsDashboard = () => {
  return (
    <div className="container py-3">
      <div className="card card-body">
        <div className="row">
          <div className="col col-md-8">
            <Switch>
              <Redirect exact from="/settings" to="/settings/basic" />
              <Route path="/settings/basic" render={() => <BasicPage />} />
              <Route path="/settings/about" render={() => <AboutPage />} />
              <Route path="/settings/account" render={() => <AccountPage />} />
            </Switch>
          </div>
          <div className="col col-md-4">
            <SettingsNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDashboard;
