import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navigation/Navbar";
import Register from "./components/auth/Register";

import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
