import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRouter = (props) => {
  const { dataUser } = useContext(UserContext);
  if (dataUser && dataUser.isAutheticated === true) {
    return (
      <>
        <Route path={props.path} component={props.component} />
      </>
    );
  } else return <Redirect to="/login"></Redirect>;
};

export default PrivateRouter;
