import React, { useState, useEffect, useContext } from "react";
import "./Nav.scss";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logoutAccount } from "../../services/registerService";
const NavHeader = () => {
  const { dataUser, logoutContext } = useContext(UserContext);
  const location = useLocation();
  let history = useHistory();
  const handlerLogout = async () => {
    let logout = await logoutAccount();
    localStorage.removeItem("jwt");
    if (logout && logout.EC === +0) {
      history.push("/login");
      toast.info("logout done!");
      logoutContext();
    } else {
      toast.error("ERORR logout");
    }
  };
  if (
    (dataUser && dataUser.isAutheticated === true) ||
    location.pathname === "/" ||
    location.pathname === "/about"
  )
    return (
      <Navbar expand="lg" className="bg-body-tertiary nav">
        <Container>
          <Navbar.Brand className="nav-brand">React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <NavLink to="/" exact className="nav-link">
                Home
              </NavLink>
              <NavLink to="/user" className="nav-link">
                Account
              </NavLink>
              <NavLink to="/role" className="nav-link">
                Roles
              </NavLink>
              <NavLink to="/project" className="nav-link">
                Project
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </Nav>
            {dataUser && dataUser.isAutheticated == true ? (
              <Nav>
                <Nav.Link>Welcome {dataUser.account.name}!</Nav.Link>
                <NavDropdown
                  title="Settings"
                  id="basic-nav-dropdown"
                  className="nav-dropdown nav-brand">
                  <NavDropdown.Item
                    className="nav-dropdown-item"
                    onClick={() => handlerLogout()}>
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown.Item className="nav-dropdown-item">
                    Change password
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav>
                <NavLink to="/login" className="nav-link nav-brand">
                  Login
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  else return <></>;
};
export default NavHeader;
