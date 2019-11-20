import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Dashboard />
      </div>
    </Router>
  );
};
export default App;
