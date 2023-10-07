// import axios from "axios";
import axios from "../component/setup/axios";

const dataUserService = async (page, limit) => {
  return await axios.get(`/api/v1/user/read?page=${page}&limit=${limit}`);
};
const deleteUser = async (user) => {
  return await axios.delete("/api/v1/user/delete", {
    data: {
      id: user.id,
    },
  });
};
const updateUser = async (id, name, address, groupId, gender) => {
  return await axios.put("/api/v1/user/update", {
    id,
    name,
    address,
    groupId,
    gender,
  });
};
const createUser = async (
  email,
  name,
  password,
  address,
  phone,
  groupId,
  gender
) => {
  return await axios.post("/api/v1/user/create", {
    email,
    name,
    password,
    address,
    phone,
    groupId,
    gender,
  });
};
export { dataUserService, deleteUser, createUser, updateUser };
