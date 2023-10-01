import axios from "axios";
const dataUserService = async (page, limit) => {
  return await axios.get(
    `http://localhost:4000/api/v1/user/read?page=${page}&limit=${limit}`
  );
};
export { dataUserService };
