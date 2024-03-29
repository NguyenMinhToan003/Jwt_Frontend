import React, { useState, useEffect } from "react";
import { getAccount } from "../services/userService";
const UserContext = React.createContext({ name: "Toan", auth: false });
const UserProvider = ({ children }) => {
  let userDefault = {
    isLoading: true,
    isAutheticated: false,
    token: "",
    acount: { email: "", name: "", groupWithRole: "", id: -1 },
  };
  const [dataUser, setUser] = useState(userDefault);
  const loginContext = (userData) => {
    setUser({ ...userData, isLoading: false });
  };
  const logoutContext = () => {
    setUser({ ...userDefault, isLoading: false });
  };
  const fetchUser = async () => {
    let response = await getAccount();

    if (response && +response.EC === 0) {
      let email = response.DT.email;
      let name = response.DT.name;
      let groupWithRole = response.DT.groupWithRole.Roles;
      let id = response.DT.id;
      let data = {
        isAutheticated: true,
        token: response.DT.acess_token,
        account: { email, name, groupWithRole, id },
        isLoading: false,
      };
      setUser(data);
    } else {
      setUser({ ...userDefault, isLoading: false });
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ dataUser, loginContext, logoutContext }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
