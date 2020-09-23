const { default: Axios } = require("axios");

export const axiosWithAuth = () => {
    const userID = JSON.parse(localStorage.getItem('user'));
    const token = userID.token;

    return Axios.create({
        baseURL: 'https://family-secret.herokuapp.com/', 
        headers: {
            Authorization: token,
        }
    })
}