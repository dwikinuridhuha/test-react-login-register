import axios from "axios";
const qs = require('qs');

const API_URL = "http://202.157.184.201:8000/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  const qsData = qs.stringify({
    username,
    password,
  });
  return axios
    .post(API_URL + "login", qsData, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    .then((response) => {
      if (response.data.data.email) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
