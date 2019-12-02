import React from "react";
import { connect } from "react-redux";
import { deleteDesign } from "../../store/actions/designAction";
import "./ProjectList.css";

const ProjectLists = ({ design, deleteDesign }) => {
  return (
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
          <span>
            <i className="fa fa-info-circle fa-lg" />
          </span>
          <span>
            <i className="fa fa-edit fa-lg" />
          </span>
          <span onClick={() => deleteDesign(design.id)}>
            <i className="fa fa-trash fa-lg" />
          </span>
        </div>
      </div>
    </div>
  );
};

const actions = {
  deleteDesign
};
export default connect(
  null,
  actions
)(ProjectLists);
