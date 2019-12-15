import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import MainDashboard from "./components/dashboard/MainDashboard";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";
import Navbar from "./components/navigation/Navbar";
import Designs from "./components/user/designs/Designs";
//import DesignDetail from './components/design/DesignDetail'
import PublicRoute from "./router/PublicRoute";
import PrivateRoute from "./router/PrivateRoute";
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
          <PublicRoute path="/register" component={Register} />
          <PublicRoute path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
