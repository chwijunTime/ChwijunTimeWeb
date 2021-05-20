import axios from 'axios';
import { BaseUrl } from 'config/config.json';
import { getAccessToken } from 'service/token';

console.log(getAccessToken());

const axiosInstance = axios.create({
    headers: {
        'Authorization': getAccessToken()
    },
    baseURL: BaseUrl,
})

export default axiosInstance;