import axios from "axios";
import * as userService from "./users";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default http;
