import axios from "../component/setup/axios";
const ebookUpload = async (file) => {
  return await axios.post("/api/v1/ebook/upload", file);
};
const ebookRead = async (page, limit) => {
  return await axios.get(`/api/v1/ebook/read?page=${page}&limit=${limit}`);
};
const ebookDetail = async (id) => {
  return await axios.get(`/api/v1/ebook/detail${id}`);
};
export { ebookUpload, ebookRead, ebookDetail };
