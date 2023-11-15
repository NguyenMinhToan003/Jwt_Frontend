import axios from "../component/setup/axios";
const registerCreateUser = async (
  email,
  name,
  password,
  address,
  phone,
  groupId,
  gender
) => {
  return await axios.post("http://localhost:4000/api/v1/signup", {
    email,
    name,
    password,
    address,
    phone,
    groupId,
    gender,
  });
};

const loginAccount = async (account, password) => {
  return await axios.post("http://localhost:4000/api/v1/login", {
    account,
    password,
  });
};
const logoutAccount = async () => {
  return await axios.post("http://localhost:4000/api/v1/logout");
};

export { registerCreateUser, loginAccount, logoutAccount };
