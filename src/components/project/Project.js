import React, { Component } from "react";
import ProjectLists from "./ProjectLists";

class Project extends Component {


  render() {
    const { designs } = this.props
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col col-md-12 col-sm-6">
            <div className="project-list">
              {designs &&
                designs.map(design => (
                  <ProjectLists key={design.id} design={design} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Project;
