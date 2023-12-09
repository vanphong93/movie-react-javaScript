import axios from "axios";
import { localServ } from "./localService";
export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M";
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
