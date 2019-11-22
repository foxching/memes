import React from "react";
import "./Display.css";

const Display = ({ display, formatSize }) => {
  return (
    <div className="card card-content">
      <div className="imgTshirt text-center">
        <img
          src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${
            display.tshirtColor
          }`}
          className="img-responsive"
          alt="img-tshirt"
        />
      </div>
      <div className="memesText text-center">
        <div className="upperText">
          <p style={{ fontSize: formatSize, color: display.textColor }}>
            {display.upperText}
          </p>
        </div>
        <img
          src={`${display.url}` || `http://via.placeholder.com/400x300`}
          alt="memes-text"
        />
        <div className="lowerText">
          <p style={{ fontSize: formatSize, color: display.textColor }}>
            {display.lowerText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Display;
