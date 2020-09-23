import { token } from "./ParseLocalStorage";

const { default: Axios } = require("axios");

export const axiosWithAuth = () => {
    
    // let token = ''

    // if (localStorage.getItem('user')) {
    // const userID = JSON.parse(localStorage.getItem('user'));
    // token = userID.token;
    // }

    return Axios.create({
        baseURL: 'https://family-secret.herokuapp.com/', 
        headers: {
            Authorization: token,
        }
    })
}