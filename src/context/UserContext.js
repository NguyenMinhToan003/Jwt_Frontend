import React, { useState } from "react";

const UserContext = React.createContext({ name: "Toan", auth: false });

const UserProvider = ({ children }) => {
  const [dataUser, setUser] = useState({
    isAutheticated: false,
    token: "",
    acount: { email: "", name: "", groupWithRole: "" },
  });
  const loginContext = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    setUser({ name: "", auth: false });
  };
  return (
    <UserContext.Provider value={{ dataUser, loginContext }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
