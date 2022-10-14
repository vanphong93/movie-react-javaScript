import axios from "axios";
import { localServ } from "./localService";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNCIsIkhldEhhblN0cmluZyI6IjIwLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3Njg1MTIwMDAwMCIsIm5iZiI6MTY1NDEwMjgwMCwiZXhwIjoxNjc2OTk4ODAwfQ.QYLXMgjth5hQh9opZbNS7JEDPZGWA3o_95kR_VyLix8";

export let https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN,
    Authorization: "bearer " + localServ.user.get()?.accessToken,
  },
});
export let https_client = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN,
    Authorization: "Bearer " + localServ.user.get()?.accessToken,
  },
});
