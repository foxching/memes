import React from "react";
import { NavLink } from "react-router-dom";

const SettingsNav = () => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item  list-group-item-primary">Profile</li>
        <li className="list-group-item">
          <NavLink to="/settings/basic">Basic</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/settings/about">About Me</NavLink>
        </li>
      </ul>
      <ul className="list-group mt-4">
        <li className="list-group-item  list-group-item-primary">Account</li>
        <li className="list-group-item">
          <NavLink to="/settings/account">My Account</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SettingsNav;
