const { default: Axios } = require("axios");

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return Axios.create({
        baseURL: '', 
        headers: {
            Authorization: token,
        }
    })
}