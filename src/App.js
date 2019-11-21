import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project from "./components/project/Project";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Dashboard />
        <Project />
      </div>
    </Router>
  );
};
export default App;
