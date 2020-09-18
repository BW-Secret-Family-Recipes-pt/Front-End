const { default: Axios } = require("axios");

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return Axios.create({
        baseURL: 'https://family-secret.herokuapp.com/', 
        headers: {
            Authorization: token,
        }
    })
}