import axios from "../component/setup/axios";
const cartLoad = async (req) => {
  return await axios.post("http://localhost:4000/api/v1/cart/load", [...req]);
};

const cartSearch = async (data) => {
  return await axios.post("http://localhost:4000/api/v1//ebook/search", data);
};
export { cartLoad, cartSearch };
