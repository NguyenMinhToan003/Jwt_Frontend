import axios from "../component/setup/axios";
const ebookUpload = async (file) => {
  return await axios.post("/api/v1/uploadebook", file);
};
export { ebookUpload };
