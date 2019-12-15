import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterNewest,
  filterOldest,
  setValue
} from "../../../../store/actions/filterActions";

class ProjectListFilters extends Component {
  onSortChange = e => {
    const val = e.target.value;
    val === "new" ? this.props.filterNewest() : this.props.filterOldest();
  };

  onFilterShowChange = e => {
    const val = e.target.value;
    this.props.setValue(val);
  };
  render() {
    const { designs, filters } = this.props;
    if (designs) {
      var text = "";
      var i;
      for (i = 0; i < designs.length; i++) {
        text += [i + 1];
      }
    }

    return (
      <div className="row">
        <div className="col col-md-4 col-sm-12 mt-2">
          <h5 className="text-muted ml-4">
            Showing {filters.show} of {designs.length} Results
          </h5>
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
                value={this.props.filters.show}
                onChange={this.onFilterShowChange}
              >
                {Array.from(text).map((t, index) => (
                  <option value={t} className="text-muted" key={index}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
  designs: state.designs
});

const actions = {
  filterNewest,
  filterOldest,
  setValue
};

export default connect(
  mapStateToProps,
  actions
)(ProjectListFilters);
