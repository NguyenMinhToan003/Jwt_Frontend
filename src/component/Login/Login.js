import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAccount } from "../../services/registerService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = (props) => {
  let history = useHistory();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [checkObjectInput, setCheckObejctInput] = useState({
    account: true,
    password: true,
  });

  const handlerSubmit = async (event) => {
    event.preventDefault();
    // handlerSentData();
    console.log("action submit");
    let response = await loginAccount(account, password);
    setCheckObejctInput({ account: true, password: true });
    if (account === "") {
      setCheckObejctInput({ ...checkObjectInput, account: false });
      toast.error("pleass enter your email or phone number ");
    } else if (password === "") {
      setCheckObejctInput({ ...checkObjectInput, password: false });
      toast.error("pleass ender your password");
    } else {
      if (response && response.data && +response.data.EC === 0) {
        let data = {
          author: true,
          token: "fake token",
        };
        sessionStorage.setItem("account", JSON.stringify(data));
        toast.info(response.data.EM);
        history.push("/user");
        window.location.reload();
      } else toast.error(response.data.EM);
    }
  };

  useEffect(() => {
    const reloadFunc = () => {
      let session = sessionStorage.getItem("account");
      if (session) {
        history.push("/");
        window.location.reload();
      }
    };
    reloadFunc();
  });
  const accountRef = useRef(null);
  const passwordRef = useRef(null);
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target === accountRef.current) passwordRef.current.focus();
      else if (event.target === passwordRef.current) await handlerSubmit(event);
    }
  };
  // const handlerSentData = () => {
  //   setAccount(accountRef.current.value);
  //   setPassword(passwordRef.current.value);
  // };
  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex  justify-content-center gap-3 row col-12 col-md-5 m-5   ">
        <h2 className="text-center brand fw-bold">Facebook</h2>
        <form className="d-flex align-items-center row gap-4 form-login p-5 rounded-3 justify-content-center border border-1">
          <h3 className="text-center mb-3">Log in to Facebook</h3>
          <input
            placeholder="Email address or phone number "
            type="text"
            className={
              checkObjectInput.account
                ? "form-control rounded-3 border border-1 px-3 py-4"
                : "form-control rounded-3  px-3 py-4 is-invalid"
            }
            ref={accountRef}
            onKeyDown={(event) => handleKeyDown(event)}
            onChange={(event) => {
              setAccount(event.target.value);
            }}
          />
          <input
            placeholder="Password"
            type="password"
            className={
              checkObjectInput.password
                ? "form-control rounded-3 border border-1 px-3 py-4"
                : "form-control rounded-3  px-3 py-4 is-invalid"
            }
            ref={passwordRef}
            onKeyDown={(event) => {
              handleKeyDown(event);
            }}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button
            type="submit"
            className="submit rounded-3 btn btn-primary fw-bold"
            onClick={(event) => {
              handlerSubmit(event);
            }}>
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

// import React, { useRef } from "react";

// const Login = () => {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();

//       if (e.target === emailRef.current) {
//         passwordRef.current.focus();
//       } else if (e.target === passwordRef.current) {
//         // Perform login logic here
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform login logic here

//     // Example: Accessing input values
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;

//     // Example: Clearing input values
//     emailRef.current.value = "";
//     passwordRef.current.value = "";
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email</label>
//       <input type="email" id="email" ref={emailRef} onKeyDown={handleKeyDown} />

//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         ref={passwordRef}
//         onKeyDown={handleKeyDown}
//       />

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;
