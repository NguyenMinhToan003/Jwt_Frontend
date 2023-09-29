import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { NavLink, useLocation } from "react-router-dom";
const Nav = () => {
  const [show, setShow] = useState(true);
  const location = useLocation();
  useEffect(() => {
    console.log(">>>> check location: ", location);
    if (location.pathname === "/login") {
      setShow(false);
    }
  }, []);

  return (
    show && (
      <ul className="nav">
        <div className="option">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/user">user</NavLink>
          </li>
          <li>
            <NavLink to="/project">project</NavLink>
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
    )
  );
};
export default Nav;
