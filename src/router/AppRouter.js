import Login from "../component/Login/Login";
import SignUp from "../component/Signup/signup";
import Role from "../component/role/Role";
import User from "../component/ManageUser/user";
import BuyEbook from "../component/BuyEbook/BuyEbook";
import { Switch, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRoute";
import Group from "../component/group/Group";
import Home from "../component/home/Home";
import DetailEbook from "../component/EBook/DetailBook";

const AppRouter = (props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <PrivateRouter path="/detailBook" component={DetailEbook} />
        <PrivateRouter path="/group" component={Group} />
        <PrivateRouter path="/role" component={Role} />
        <PrivateRouter path="/user" component={User} />
        <PrivateRouter path="/buyEbook" component={BuyEbook} />
        <Route path="/about">about</Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="*">404 not found</Route>
      </Switch>
    </>
  );
};
export { AppRouter };
