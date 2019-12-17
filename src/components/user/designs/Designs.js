import React, { Component } from "react";
import ProjectList from "./design/ProjectList";
import ProjectListFilter from "./design/ProjectListFilter";

class Designs extends Component {
  render() {
    return (
      <div className="container py-4">
        <div className="card card-body">
          <ProjectListFilter />
          <ProjectList />
        </div>
      </div>
    );
  }
}

export default Designs;
