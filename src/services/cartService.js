import axios from "../component/setup/axios";
const cartLoad = async (req) => {
  return await axios.post("http://localhost:4000/api/v1/cart/load", [...req]);
};

export { cartLoad };
