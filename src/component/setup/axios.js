import axios from "axios";
import { toast } from "react-toastify";
// Set config defaults when creating the instance

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

// Alter defaults after instance has been created
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

// set include cooke
instance.defaults.withCredentials = true;
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let status = (error && error.response && error.response.status) || 500;
    let arlet = "";
    switch (status) {
      case 401:
        arlet = "UnAuthenticate";
      case 403:
        arlet = "Not Permission resource ";
    }
    toast.error(`${arlet}.... `);
    return Promise.reject(error);
  }
);
export default instance;
