import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { deleteDesign } from "../../../../store/actions/designAction";
import Modal from "../../../modal/Modal";
import "./ProjectList.css";

class ProjectListItem extends Component {
  state = {
    show: false,
    id: null
  };

  handleShow = id => {
    this.setState({
      show: true,
      id
    });
  };

  handleEdit = id => {
    this.props.history.push("/");
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    const { design, deleteDesign } = this.props;
    return (
      <React.Fragment>
        <div className="item text-center">
          <div className="card card-body">
            <div className="imgThumbnail">
              <img
                className="img-fluid"
                src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${
                  design.tshirtColor
                }`}
                alt="t-shirt"
              />
            </div>
            <div className="memesThumbnail ">
              <div className="upperTextThumbnail">
                <p style={{ fontSize: "9px", color: design.textColor }}>
                  {design.upperText}
                </p>
              </div>
              <img
                src={`${design.url}` || `http://via.placeholder.com/400x300`}
                alt="memes-text"
              />
              <div className="lowerTextThumbnail">
                <p style={{ fontSize: "9px", color: design.textColor }}>
                  {design.lowerText}
                </p>
              </div>
            </div>
            <p>{design.name}</p>
            {/* //<button className="btn btn-primary btn-sm">View</button> */}
            <div className="actionButton">
              <Tippy content="Info">
                <span>
                  <i className="fa fa-info-circle fa-lg" />
                </span>
              </Tippy>
              <Tippy content="Edit">
                <span>
                  <Link to={`/design/${design.id}`}>
                    <i className="fa fa-edit fa-lg" />
                  </Link>
                </span>
              </Tippy>
              <Tippy content="Delete">
                <span onClick={() => this.handleShow(design.id)}>
                  <i className="fa fa-trash fa-lg" />
                </span>
              </Tippy>
            </div>
          </div>
        </div>
        <Modal
          show={this.state.show}
          close={this.handleClose}
          id={this.state.id}
          deleteDesign={deleteDesign}
        />
      </React.Fragment>
    );
  }
}
const actions = {
  deleteDesign
};
export default connect(
  null,
  actions
)(ProjectListItem);
