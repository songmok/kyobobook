import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.0.183:9988/api",
  params: {},
});
export default instance;
// http://192.168.0.183:9988/
