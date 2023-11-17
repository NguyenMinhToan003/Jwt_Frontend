import axios from "../component/setup/axios";
const createRole = async (req, res) => {
  return await axios.post("http://localhost:4000/api/v1/role/create", [...req]);
};
const readRole = async (req, res) => {
  return await axios.get("http://localhost:4000/api/v1/role/read");
};
export { createRole, readRole };
