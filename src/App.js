import React from "react";
import Nav from "./component/Navigation/Nav";
import Login from "./component/Login/Login";
import SignUp from "./component/Signup/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App-container">
        <header className="App-header">
          <Nav />
        </header>

        <Switch>
          <Route path="/" exact>
            home
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
    </Router>
  );
}

export default App;
