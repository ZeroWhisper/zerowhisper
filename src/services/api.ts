import axios from "axios";

export const api = axios.create({
  // url: "https://gptfree.appgps.com.br/prompt=What%20day%20is%20today",
  baseURL: "http://gptfree.appgps.com.br/",
});
