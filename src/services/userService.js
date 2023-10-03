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
export { dataUserService, deleteUser, createUser };
