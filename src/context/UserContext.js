import React, { useState, useEffect } from "react";
import { getAccount } from "../services/userService";
const UserContext = React.createContext({ name: "Toan", auth: false });

const UserProvider = ({ children }) => {
  const [dataUser, setUser] = useState({
    isLoading: true,
    isAutheticated: false,
    token: "",
    acount: { email: "", name: "", groupWithRole: "" },
  });
  const loginContext = (userData) => {
    setUser({ ...userData, isLoading: false });
  };
  const logoutContext = () => {
    setUser({ name: "", auth: false });
  };
  const fetchUser = async () => {
    let response = await getAccount();
    if (response && +response.EC === 0) {
      let email = response.DT.email;
      let name = response.DT.name;
      let groupWithRole = response.DT.groupWithRole.Roles;
      let data = {
        isAutheticated: true,
        token: response.DT.acess_token,
        acount: { email, name, groupWithRole },
      };

      setUser(data);
    }
  };

  useEffect(() => {
    // if (window.location.pathname !== "/") {
    fetchUser();
    // }
  }, []);
  return (
    <UserContext.Provider value={{ dataUser, loginContext, logoutContext }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
