import axios from "axios";
import * as userService from "./users";

const http = axios.create({
  baseURL: "http://localhost:5001/sell-it-747c3/us-central1/api",
});

export default http;
