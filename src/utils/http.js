import axios from "axios";

const http = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

export const get = async (path, option = {}) => {
  const res = await http.get(path, option);
  return res.data;
};

export default http;
