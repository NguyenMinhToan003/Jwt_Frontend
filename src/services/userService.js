import axios from "axios";
const dataUserService = async () => {
  return await axios.get("http://localhost:4000/api/v1/user/read");
};
export { dataUserService };
