import axios from "axios";

const apí = axios.create({
  baseURL: "http://192.168.1.112:3333"
});

export default apí;
