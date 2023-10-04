import axios from "axios";
const dataUserService = async (page, limit) => {
  return await axios.get(
    `http://localhost:4000/api/v1/user/read?page=${page}&limit=${limit}`
  );
};
const deleteUser = async (user) => {
  return await axios.delete("http://localhost:4000/api/v1/user/delete", {
    data: {
      id: user.id,
    },
  });
};
const updateUser = async (
  id,
  email,
  name,
  password,
  address,
  phone,
  major,
  gender
) => {
  return await axios.put("http://localhost:4000/api/v1/user/update", {
    id,
    email,
    name,
    password,
    address,
    phone,
    major,
    gender,
  });
};
const createUser = async (
  email,
  name,
  password,
  address,
  phone,
  major,
  gender
) => {
  return await axios.post("http://localhost:4000/api/v1/user/create", {
    email,
    name,
    password,
    address,
    phone,
    major,
    gender,
  });
};
export { dataUserService, deleteUser, createUser, updateUser };
