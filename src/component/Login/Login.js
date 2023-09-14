import React from "react";
import "./Login.scss";
import { FaGoogle } from "react-icons/fa";
class Login extends React.Component {
  render() {
    return (
      <a
        className="btn btn-primary align-center"
        style={{ backgroundColor: "#3b5998" }}
        href="#!">
        <FaGoogle />
      </a>
    );
  }
}
export default Login;
