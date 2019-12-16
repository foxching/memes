import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainDashboard from "./components/dashboard/MainDashboard";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";
import Navbar from "./components/navigation/Navbar";
import Designs from "./components/user/designs/Designs";
import PublicRoute from "./router/PublicRoute";
import PrivateRoute from "./router/PrivateRoute";
import SettingsDashboard from "./components/user/settings/SettingsDashboard";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <PrivateRoute path="/" exact={true} component={MainDashboard} />
          <PrivateRoute path="/design/:id" component={MainDashboard} />
          <PrivateRoute path="/my-design" exact={true} component={Designs} />
          <PrivateRoute path="/settings" component={SettingsDashboard} />
          <PublicRoute path="/register" component={Register} />
          <PublicRoute path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
