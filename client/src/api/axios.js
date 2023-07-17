import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://plantz.fly.dev',
    baseURL: 'http://localhost:4000',
    withCredentials: 'include'
});


export default instance;