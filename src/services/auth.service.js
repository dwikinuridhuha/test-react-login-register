import axios from "axios";

const qs = require('qs');

const API_URL = "http://202.157.184.201:8000/";

const register = (email, hp, firstname, lastname, grup, role, tgl_lahir, password, strict_password, referral_code) => {

    console.log(
        email, hp, firstname, lastname, grup, role, tgl_lahir, password, strict_password, referral_code
    );
    return axios.post(API_URL + "users", {
        email,
        hp,
        firstname,
        lastname,
        grup,
        role,
        tgl_lahir,
        password,
        strict_password
    }, {
        headers: {
            // 'application/json' is the modern content-type for JSON, but some
            // older servers may use 'text/json'.
            // See: http://bit.ly/text-json
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
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
