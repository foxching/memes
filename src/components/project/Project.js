import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ProjectLists from "./ProjectLists";

class Project extends Component {
  render() {
    const { designs } = this.props;

    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="project-list">
              {designs &&
                designs.map(design => (
                  <ProjectLists key={design.id} design={design} />
                  //<Display2 design={design} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    auth: state.firebase.auth,
    designs: state.firestore.ordered.designs
  };
};

export default compose(
  connect(mapState),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    return [
      {
        collection: "designs",
        storeAs: "designs",
        where: [["authorId", "==", props.auth.uid]]
      }
    ];
  })
)(Project);
