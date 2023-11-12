import React, { useState, useEffect, useContext } from "react";
import "./Nav.scss";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
const Nav = () => {
  const { dataUser } = useContext(UserContext);
  const location = useLocation();
  console.log(location.pathname);
  if (
    (dataUser && dataUser.isAutheticated === true) ||
    location.pathname === "/"
  )
    return (
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
    );
  else return <></>;
};
export default Nav;
