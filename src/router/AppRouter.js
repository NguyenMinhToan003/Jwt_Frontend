import Login from "../component/Login/Login";
import SignUp from "../component/Signup/signup";
import { User } from "../component/ManageUser/user";
import { Switch, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRoute";
const AppRouter = (props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          home
        </Route>
        <PrivateRouter path="/user" component={User} />
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
    </>
  );
};
export { AppRouter };
