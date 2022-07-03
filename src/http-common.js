import axios from "axios";

export default axios.create({
  baseURL: "https://nearest-attraction.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});