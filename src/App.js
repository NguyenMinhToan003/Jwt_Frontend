import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./component/Navigation/Nav";
import { AppRouter } from "./router/AppRouter";
function App() {
  return (
    <Router>
      <div className="App-container">
        <header className="App-header">
          <Nav />
        </header>
      </div>
      <AppRouter />

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
