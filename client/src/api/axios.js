import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://plantz.fly.dev',
    headers:{ 'Content-Type': 'application/json'},
    baseURL: 'http://localhost:4000',
    withCredentials: true,
});


export default instance;