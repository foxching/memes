import React from "react";
import "./Display.css";

const baseUrl =
  "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";

const Settings = props => {
  const {
    tshirtColorChange,
    handleChangeText,
    handleImageUpload,
    display: { upperText, lowerText }
  } = props;
  return (
    <div className="container bg-light card">
      <h3 className="text-center">Settings</h3>
      <h4>Change T-Shirt Color</h4>
      <div className="t-shirt-color">
        <img
          onClick={tshirtColorChange}
          src={`${baseUrl}white.png`}
          alt="white-shirt"
          id="white"
        />
        <img
          onClick={tshirtColorChange}
          src={`${baseUrl}black.png`}
          alt="black-shirt"
          id="black"
        />
        <img
          onClick={tshirtColorChange}
          src={`${baseUrl}grey.png`}
          alt="grey-shirt"
          id="grey"
        />
        <img
          onClick={tshirtColorChange}
          src={`${baseUrl}blue.png`}
          alt="blue-shirt"
          id="blue"
        />
        <img
          onClick={tshirtColorChange}
          src={`${baseUrl}red.png`}
          alt="red-shirt"
          id="red"
        />
      </div>
      <hr />
      <h4>Write Text</h4>
      <input
        type="text"
        name="upperText"
        value={upperText}
        className="form-control form-control sm mb-2"
        placeholder="Upper Text"
        onChange={handleChangeText}
      />
      <input
        type="text"
        name="lowerText"
        value={lowerText}
        className="form-control form-control sm mb-2"
        placeholder="Lower Text"
        onChange={handleChangeText}
      />
      <hr />
      <h4>Upload Image</h4>
      <input
        type="file"
        onChange={handleImageUpload}
        className="form-control-file"
        id="exampleFormControlFile1"
      />
      <hr />
      <h4>Text Size</h4>
      <input type="range" className="custom-range" min="0" max="5" />
      <hr />
      <h4>Text Color</h4>
      <select className="custom-select">
        <option>White</option>
        <option>Black</option>
        <option>Blue</option>
        <option>Red</option>
      </select>
      <hr />
      <button className="btn btn-primary btn-sm mb-2">Save</button>
    </div>
  );
};

export default Settings;
