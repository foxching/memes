import React from "react";
import { NavLink } from "react-router-dom";

const SettingsNav = () => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item  list-group-item-dark">
          <i className="fa fa-user fa-lg" aria-hidden="true" /> Profile
        </li>
        <li className="list-group-item">
          <NavLink to="/settings/basic" className="link">
            Basic
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/settings/about" className="link">
            About Me
          </NavLink>
        </li>
      </ul>
      <ul className="list-group mt-4">
        <li className="list-group-item  list-group-item-dark">
          <i className="fa fa-cogs fa-lg" aria-hidden="true" />
          Account
        </li>
        <li className="list-group-item">
          <NavLink to="/settings/account" className="link">
            My Account
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SettingsNav;
