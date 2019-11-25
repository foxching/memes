import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact={true} component={Dashboard} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <Switch>
                <Route path="/register" exact={true} component={Register} />
                <Route path="/login" exact={true} component={Login} />
              </Switch>
            </div>
          )}
        />
      </div>
    </Router>
  );
};
export default App;
