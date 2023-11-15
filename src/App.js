import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import NavHeader from "./component/Navigation/NavHeader";
import { AppRouter } from "./router/AppRouter";
import { ColorRing } from "react-loader-spinner";

function App() {
  let { dataUser } = useContext(UserContext);
  return (
    <Router>
      {dataUser &&
      dataUser.isLoading == true &&
      window.location.pathname !== "/" ? (
        <div className="loading">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <div className="App-container">
            <header className="App-header">
              <NavHeader />
            </header>
          </div>
          <AppRouter />
        </>
      )}

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
