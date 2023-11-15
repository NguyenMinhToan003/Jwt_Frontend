import React, { useState, useEffect, useContext } from "react";
import "./Nav.scss";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavHeader = () => {
  const { dataUser } = useContext(UserContext);
  const location = useLocation();
  if (
    (dataUser && dataUser.isAutheticated === true) ||
    location.pathname === "/"
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
              <NavLink to="/project" className="nav-link">
                Project
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </Nav>
            <Nav>
              <Nav.Link>Welcome {dataUser.account.name}!</Nav.Link>
              {dataUser && dataUser.isAutheticated == true ? (
                <NavDropdown
                  title="Menu"
                  id="basic-nav-dropdown"
                  className="nav-dropdown nav-brand">
                  <NavDropdown.Item className="nav-dropdown-item">
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.2"
                    className="nav-dropdown-item">
                    Change password
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink to="/login" className="nav-link nav-brand">
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  else return <></>;
};
export default NavHeader;
