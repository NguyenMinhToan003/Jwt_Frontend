import Login from "../component/Login/Login";
import SignUp from "../component/Signup/signup";
import Role from "../component/role/Role";
import User from "../component/ManageUser/user";
import BuyEbook from "../component/BuyEbook/BuyEbook";
import { Switch, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRoute";
import Group from "../component/group/Group";
import Home from "../component/home/Home";
import DetailEbook from "../component/detailEbook/DetailBook";
import UploadEbook from "../component/UploadEbook/UploadEbook";
import UploadFile from "../component/test/uploadFile";
import MainCart from "../component/Cart/cart";

const AppRouter = (props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" component={UploadFile} />
        <PrivateRouter path="/cart" component={MainCart} />
        <PrivateRouter path="/book/upload" component={UploadEbook} />
        <PrivateRouter path="/detailBook" component={DetailEbook} />
        <PrivateRouter path="/group" component={Group} />
        <PrivateRouter path="/role" component={Role} />
        <PrivateRouter path="/user" component={User} />
        <PrivateRouter path="/buyEbook" component={BuyEbook} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="*">404 not found</Route>
      </Switch>
    </>
  );
};
export { AppRouter };
