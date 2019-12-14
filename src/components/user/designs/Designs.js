import React, { Component } from "react";
import ProjectList from "./design/ProjectList";
import ProjectListFilter from "./design/ProjectListFilter";

class DesignList extends Component {
  render() {
    return (
      <div className="container py-3">
        <div className="card card-body">
          <ProjectListFilter />
          <ProjectList />
        </div>
      </div>
    );
  }
}

export default DesignList;
