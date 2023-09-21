import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import "../Signup/signup.scss";
const SignUp = () => {
  const handlerGroupId = (event) => {
    console.log(">>>>>>> check event :", event.target.value);
  };

  return (
    <div className="signup-container py-5">
      <div className="container d-flex ">
        <div className="info-signup  col-7 d-none d-md-block  ">
          <h2 className="brand fw-bold my-5 ">Sign Up </h2>
          <span className="d-grid col-8 fs-5 py-5">
            Facebook is an online social media and social networking service
            owned by American technology giant Meta Platforms. Created in 2004
            by Mark Zuckerberg with fellow Harvard College students and
            roommate…
          </span>
          <NavLink to="/login">
            <button
              type="button"
              className="btn btn-success fw-bold px-3 py-2 fs-6">
              Back Login
            </button>
          </NavLink>
        </div>
        <form className="d-flex row col-12 col-md-5 gap-3 form-signup p-5 border border-1 rounded-3">
          <h3 className="fw-bold text-center fs-1 brand">Facebook</h3>
          <input
            type="email"
            placeholder="Email address"
            className=" form-control  border border-1 px-3 py-3"
          />
          <input
            type="text"
            placeholder="Name"
            className=" form-control  border border-1 px-3 py-3"
          />
          <input
            type="password"
            placeholder="Password"
            className=" form-control  border border-1 px-3 py-3"
          />
          <input
            type="password"
            placeholder="Re-Password"
            className=" form-control  border border-1 px-3 py-3"
          />
          <input
            type="text"
            placeholder="Address"
            className=" form-control  border border-1 px-3 py-3"
          />
          <input
            type="tel"
            placeholder="Phone"
            className=" form-control  border border-1 px-3 py-3"
          />
          <select
            className="form-select  border border-1 px-3 py-3"
            onChange={(event) => {
              handlerGroupId(event);
            }}>
            <option selected>Choose gender...</option>
            <option value="0">Male</option>
            <option value="1">Famale</option>
          </select>
          <select
            className="form-select rounded-3 border border-1 px-3 py-3"
            onChange={(event) => {
              handlerGroupId(event);
            }}>
            <option selected>Choose major...</option>
            <option value="1">Leader</option>
            <option value="2">Developer</option>
            <option value="3">Tester</option>
          </select>
          <button type="submit" className="btn btn-primary px-3 py-3 fw-bold">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
