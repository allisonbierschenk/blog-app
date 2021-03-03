import axios from "axios";
//useless comment

let apiUrl;

const apiUrls = {
  production: "https://chillset-posts.herokuapp.com/api",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
