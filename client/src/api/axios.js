import axios from "axios";

const instance = axios.create({
    baseURL: 'https://plantz.fly.dev',
    withCredentials: true
});

export default instance;