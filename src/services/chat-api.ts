import axios from "axios";

const baseURL = "http://localhost:3333";

export const chatApi = axios.create({
  baseURL,
});
