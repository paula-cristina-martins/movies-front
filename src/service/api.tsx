import axios from "axios";

export const api = axios.create({
  baseURL: "https://movies-xxuh.onrender.com",
});
