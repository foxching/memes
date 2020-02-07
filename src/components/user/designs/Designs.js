import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ProjectList from "./design/ProjectList";
import ProjectListFilter from "./design/ProjectListFilter";

class Designs extends Component {
  render() {
    return (
      <div className="container py-4">
        <Helmet>
          <title>My Designs</title>
          <meta name="description" content="My Designs" />
        </Helmet>
        <div className="card card-body">
          <ProjectListFilter />
          <ProjectList />
        </div>
      </div>
    );
  }
}

export default Designs;
