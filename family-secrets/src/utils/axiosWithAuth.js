const { default: Axios } = require("axios");

export const axiosWithAuth = () => {
    // const token = localStorage.getItem('token'); //will uncomment when we have backend server
    const token = 'QpwL5tke4Pnpja7X4';

    //baseURL until we can use backend
    return Axios.create({
        baseURL: 'https://reqres.in/api', 
        headers: {
            Authorization: token,
        }
    })
}