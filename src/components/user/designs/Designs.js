import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ProjectList from "./design/ProjectList";
import ProjectListFilter from "./design/ProjectListFilter";
import Loader from "../../loader/Loader";
import { fetchDesigns } from "../../../store/actions/designAction";

class DesignList extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.designs !== nextProps.designs) {
      this.props.fetchDesigns(nextProps.designs);
    }
  }

  render() {
    const { requesting } = this.props;
    const loading = Object.values(requesting).some(a => a === true);
    if (loading) {
      return <Loader />;
    }
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

const mapState = state => {
  return {
    auth: state.firebase.auth,
    designs: state.firestore.ordered.designs,
    requesting: state.firestore.status.requesting
  };
};

const actions = {
  fetchDesigns
};

export default compose(
  connect(
    mapState,
    actions
  ),
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
