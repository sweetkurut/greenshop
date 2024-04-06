import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:1337/api/",
});

const allApis = {
  getPlants() {
    return instance.get("plants/");
  },
};

export default allApis;
