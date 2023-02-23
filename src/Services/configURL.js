import axios from "axios";
import { localServ } from "./localService";
export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjUiLCJIZXRIYW5TdHJpbmciOiIxNS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODQxMDg4MDAwMDAiLCJuYmYiOjE2NjY3MTcyMDAsImV4cCI6MTY4NDI1NjQwMH0.vdVVhPEIB7ZV9oEaVDyxq430wfBgJgeYqiM5JTcdwqo";
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
