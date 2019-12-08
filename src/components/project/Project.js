import React, { Component } from "react";
import ProjectLists from "./ProjectLists";

class Project extends Component {
  render() {
    const { designs } = this.props;

    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col col-md-4 col-sm-12 mt-2">
            <h5 className="text-muted ml-4">Showing 4 of 10 Results</h5>
          </div>
          <div className="col col-md-4 col-sm-12">
            <div className="row">
              <label className="text-muted mt-2">Sort by:</label>
              <div className="col-md-8">
                <select
                  class="form-control"
                  style={{ height: "88%", maxWidth: "60%" }}
                >
                  <option className="text-muted">Newest</option>
                  <option className="text-muted">Oldest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col col-md-4 col-sm-12">
            <div className="row">
              <label className="text-muted mt-2">Show</label>
              <div className="col-md-8">
                <select
                  class="form-control"
                  style={{ height: "88%", maxWidth: "35%" }}
                >
                  <option className="text-muted">5</option>
                  <option>10</option>
                  <option>15</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          {designs && designs.length >= 1 ? (
            designs.map(design => (
              <div className="col col-md-4 col-sm-6" key={design.id}>
                <div className="project-list">
                  <ProjectLists design={design} />
                </div>
              </div>
            ))
          ) : (
            <div className="col col-md-12">
              <h1 className="text-center text-muted">
                You don't have any design
              </h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Project;
