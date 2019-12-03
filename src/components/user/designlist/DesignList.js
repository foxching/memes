import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Project from "../../project/Project";
import Loader from "../../loader/Loader";

class DesignList extends Component {
  render() {
    const { designs, requesting } = this.props;
    //const loading = !isLoaded(designs)
    const loading = Object.values(requesting).some(a => a === true);
    if (loading) {
      return <Loader />;
    }

    return (
      <div className="container py-3">
        <div className="card card-body">
          <Project designs={designs} />
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    auth: state.firebase.auth,
    designs: state.firestore.ordered.designs,
    requesting: state.firestore.status.requesting
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
)(DesignList);
