import axios from "axios";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_URL,
    header : {'ContentType': 'application/json'}
})

export default http;

export const baseURL = process.env.NEXT_PUBLIC_REST_API_URL;