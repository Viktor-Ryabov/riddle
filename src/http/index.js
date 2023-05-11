import axios from "axios";
import { BASE_URL } from "../constants/routeConstants";
import { config } from "npm";

const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL    
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Basic Y2xpZW50OnNlY3JldA==`
})