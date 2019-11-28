import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";
import Navbar from "./components/navigation/Navbar";
import PublicRoute from "./router/PublicRoute";
import PrivateRoute from "./router/PrivateRoute";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <PrivateRoute path="/" exact={true} component={Dashboard} />
          <PublicRoute path="/register" exact={true} component={Register} />
          <PublicRoute path="/login" exact={true} component={Login} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
