import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000",
  params: {},
});
export default instance;
// http://192.168.0.183:9988/
