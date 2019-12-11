import React, { Component } from "react";
import ProjectListItem from "./ProjectListItem";
import { connect } from "react-redux";
import selecteDesigns from "../../../../store/selectors/selectedDesigns";

class ProjectList extends Component {
  state = {
    d: this.props.designs
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.designs !== this.props.designs;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.designs !== nextProps.designs) {
      this.setState({ d: nextProps.designs });
    }
  }

  render() {
    const { d } = this.state;
    return (
      <div className="container mb-5">
        <div className="row mt-2">
          {d && d.length >= 1 ? (
            d.map(design => (
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
    designs: selecteDesigns(state.designs, state.filters)
  };
};

export default connect(mapState)(ProjectList);
