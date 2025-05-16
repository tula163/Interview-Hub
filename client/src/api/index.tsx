// src/api/index.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050/api",
  timeout: 5000,
  withCredentials: true
});

export default api;
