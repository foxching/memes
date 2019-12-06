import React from "react";
import "./Display.css";

const Display = ({ display, formatSize }) => {
  return (
    <div className="text-center">
      <div className="imgTshirt ">
        <img
          src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${
            display.tshirtColor
          }`}
          className="img-responsive max-width: 80%"
          alt="img-tshirt"
        />
      </div>
      <div className="memesText">
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
