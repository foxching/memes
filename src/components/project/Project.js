import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectLists from "./ProjectLists";
//import Display2 from "../design/Display2";

class Project extends Component {
  render() {
    const { designs } = this.props;

    return (
      <div className="container mb-5">
        <div className="row">
          <div className="project-list">
            {designs &&
              designs.map(design => (
                <ProjectLists key={design.id} design={design} />
                //<Display2 design={design} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapState = state => {
  return {
    designs: state.design.designs
  };
};
export default connect(mapState)(Project);
