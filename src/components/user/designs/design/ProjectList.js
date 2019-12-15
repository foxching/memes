import React, { Component } from "react";
import ProjectListItem from "./ProjectListItem";
import { connect } from "react-redux";
import selecteDesigns from "../../../../store/selectors/selectedDesigns";
import { getDesigns } from "../../../../store/actions/designAction";
import Loader from "../../../loader/Loader";

class ProjectList extends Component {
  UNSAFE_componentWillMount() {
    this.props.getDesigns();
  }

  render() {
    const { designs, loading } = this.props;
    if (loading) {
      return <Loader />;
    }
    return (
      <div className="container mb-5">
        <div className="row mt-2">
          {designs && designs.length > 0 ? (
            designs.map(design => (
              <div className="col col-md-4 col-sm-6" key={design.id}>
                <div className="project-list">
                  <ProjectListItem design={design} />
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

const mapState = state => {
  return {
    designs: selecteDesigns(state.designs, state.filters),
    loading: state.async.loading
  };
};

const actions = {
  getDesigns
};
export default connect(
  mapState,
  actions
)(ProjectList);
