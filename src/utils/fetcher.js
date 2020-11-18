import axios from 'axios';
import {ROOT_URL} from "./config";

const instance = axios.create({
    baseURL: ROOT_URL,
    withCredentials: false
});

export default instance;
