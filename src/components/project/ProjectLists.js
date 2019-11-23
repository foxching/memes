import React from "react";
import "./ProjectList.css";

const ProjectLists = ({ design }) => {
  return (
    <div className="item text-center">
      <div className="card card-body">
        <div className="imgThubnail">
          <img
            className="img-fluid"
            src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${
              design.tshirtColor
            }`}
            alt="t-shirt"
          />
        </div>
        <div className="memesThumbnail ">
          <div className="upperText">
            <p style={{ fontSize: "9px", color: design.textColor }}>
              {design.upperText}
            </p>
          </div>
          <img
            src={`${design.url}` || `http://via.placeholder.com/400x300`}
            alt="memes-text"
          />
          <div className="lowerText">
            <p style={{ fontSize: "9px", color: design.textColor }}>
              {design.lowerText}
            </p>
          </div>
        </div>
        <p>{design.name}</p>
        <button className="btn btn-primary btn-sm">View</button>
      </div>
    </div>
  );
};

export default ProjectLists;
