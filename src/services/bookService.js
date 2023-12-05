import axios from "../component/setup/axios";
const ebookUpload = async (file) => {
  return await axios.post("/api/v1/ebook/upload", file);
};
const ebookRead = async () => {
  return await axios.get("/api/v1/ebook/read");
};
export { ebookUpload, ebookRead };
