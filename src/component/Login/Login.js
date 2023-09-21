import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex  justify-content-center gap-3 row col-12 col-md-5 m-5   ">
        <h2 className="text-center brand fw-bold">Facebook</h2>
        <form className="d-flex align-items-center row gap-4 form-login p-5 rounded-3 justify-content-center border border-1">
          <h3 className="text-center mb-3">Log in to Facebook</h3>
          <input
            placeholder="Email address or phone number "
            type="text"
            className="form-control rounded-3 border border-1 px-3 py-4"
          />
          <input
            placeholder="Password"
            type="password"
            className="form-control rounded-3 border border-1 px-3 py-4"
          />
          <button
            type="submit"
            className="submit rounded-3 btn btn-primary fw-bold">
            Login
          </button>
          <div className="d-flex justify-content-center gap-2 link rounded-3">
            <NavLink to="/forgotAccount">Forgotten NavLinkccount?</NavLink>
            <NavLink to="/signup">Sign up for Facebook</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
