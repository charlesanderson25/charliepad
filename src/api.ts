import axios from "axios";

export const api = axios.create({
  baseURL: "https://notepads.eduardovelho.com/",
});

api.get("/notepads");
