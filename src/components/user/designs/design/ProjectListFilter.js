import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterNewest,
  filterOldest
} from "../../../../store/actions/filterActions";

class ProjectListFilters extends Component {
  onSortChange = e => {
    const val = e.target.value;
    val === "new" ? this.props.filterNewest() : this.props.filterOldest();
  };

  render() {
    return (
      <div className="row">
        <div className="col col-md-4 col-sm-12 mt-2">
          <h5 className="text-muted ml-4">Showing 4 of 10 Results</h5>
        </div>
        <div className="col col-md-4 col-sm-12">
          <div className="row">
            <label className="text-muted mt-2">Sort by:</label>
            <div className="col-md-8">
              <select
                className="form-control"
                style={{ height: "88%", maxWidth: "60%" }}
                value={this.props.filters.filterDate}
                onChange={this.onSortChange}
              >
                <option value="new" className="text-muted">
                  Newest
                </option>
                <option value="old" className="text-muted">
                  Oldest
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="col col-md-4 col-sm-12">
          <div className="row">
            <label className="text-muted mt-2">Show</label>
            <div className="col-md-8">
              <select
                className="form-control"
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
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const actions = {
  filterNewest,
  filterOldest
};

export default connect(
  mapStateToProps,
  actions
)(ProjectListFilters);
