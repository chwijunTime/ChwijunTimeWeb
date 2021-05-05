import axios from 'axios';
import { BaseUrl } from 'config/config.json';
import { getAccessToken } from 'service/token';

const axiosInstance = axios.create({
    headers: {
        'Authorization': getAccessToken()
    },
    baseURL: BaseUrl,
})

export default axiosInstance;