import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <ul className="nav">
        <div className="option">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </div>
        <div className="login btn-floating">
          <NavLink to="/login" className="btn btn-outline-success me-2">
            Login
          </NavLink>
        </div>
      </ul>
    );
  }
}
export default Nav;
