import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3003", // Backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
