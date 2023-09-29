import Login from "../component/Login/Login";
import SignUp from "../component/Signup/signup";
import { User, Project } from "../component/ManageUser/user";
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
        <Route path="/about">about</Route>
        <PrivateRouter path="/project" component={Project} />
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
