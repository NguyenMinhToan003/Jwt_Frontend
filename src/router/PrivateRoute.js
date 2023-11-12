import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const PrivateRouter = (props) => {
  let history = useHistory();
  const { dataUser } = useContext(UserContext);
  console.log("context : ", dataUser);
  useEffect(() => {
    const redirectUrl = () => {
      let session = sessionStorage.getItem("account");
      if (!session) {
        history.push("/login");
        window.location.reload();
      }
    };
    redirectUrl();
  });
  return (
    <>
      <Route path={props.path} component={props.component} />
    </>
  );
};
export default PrivateRouter;
