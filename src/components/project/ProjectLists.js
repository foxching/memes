import React from "react";

const ProjectLists = ({ design }) => {
  return (
    <div className="item text-center">
      <div className="card card-body">
        <img
          className="img-fluid"
          src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${
            design.tshirtColor
          }`}
          alt="t-shirt"
        />
        <p>{design.name}</p>
        <button className="btn btn-primary btn-sm">View</button>
      </div>
    </div>
  );
};

export default ProjectLists;
