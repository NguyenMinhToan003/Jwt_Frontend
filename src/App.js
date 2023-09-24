import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";
import Nav from "./component/Navigation/Nav";
import Login from "./component/Login/Login";
import SignUp from "./component/Signup/signup";
import { User } from "./component/ManageUser/user";

function App() {
  const [account, setAccount] = useState({});
  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (session) {
      setAccount(session);
    }
  }, []);
  return (
    <Router>
      <div className="App-container">
        <header className="App-header">
          {account && _.isEmpty(account) && <Nav />}
        </header>

        <Switch>
          <Route path="/" exact>
            home
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/about">about</Route>
          <Route path="/contact">contact</Route>
          <Route path="/news">news</Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="*">404 not found</Route>
        </Switch>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
