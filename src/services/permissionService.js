import axios from "../component/setup/axios";
const createRole = async (req, res) => {
  return await axios.post("http://localhost:4000/api/v1/role/create", [...req]);
};
const readRole = async (page, limit) => {
  return await axios.get(
    `http://localhost:4000/api/v1/role/read?page=${page}&limit=${limit}`
  );
};
const UpdateRole = async (req, res) => {
  return await axios.put("http://localhost:4000/api/v1/role/update", req);
};
const DeleteRole = async (id) => {
  return await axios.delete(
    `http://localhost:4000/api/v1/role/delete?id=${id}`
  );
};
const readGroup = async (req, res) => {
  return await axios.get("http://localhost:4000/api/v1/group/read");
};
const readAllRole = async () => {
  return await axios.get("http://localhost:4000/api/v1/role");
};
const readGroupWithRole = async (req, res) => {
  return await axios.get(
    `http://localhost:4000/api/v1/groupwithrole?id=${req.id}`
  );
};

export {
  createRole,
  readRole,
  readGroup,
  readGroupWithRole,
  UpdateRole,
  DeleteRole,
  readAllRole,
};
