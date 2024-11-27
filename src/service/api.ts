import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7158",
});

export default api;
