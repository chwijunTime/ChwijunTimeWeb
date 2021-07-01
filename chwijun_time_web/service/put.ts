import { BaseUrl } from 'config/config.json';
import { getAccessToken, getRefreshToken, setAccessToken } from 'service/token';
import axios from 'axios';

const instance = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Authorization': `Bearer ${getAccessToken()}`,
    },
    timeout: 1000
});

instance.interceptors.response.use(
    (response) => {
        return response;
    }, async (error) => {
        const {
            config,
            response: { status },
        } = error;
        if(status === 401) {
            const originalRequest = config;
            const { data } = await axios.post(`${BaseUrl}/v1/auth/refresh`, {
                "refreshToken": getRefreshToken()
            });
            data.success ? setAccessToken(data.data.newToken) : (alert("다시 로그인해주세요."), window.location.replace('/'));
            axios.defaults.headers.common.Authorization = `Bearer ${getAccessToken()}`;
            originalRequest.headers.Authorization = `Bearer ${getAccessToken()}`;
            return axios(originalRequest);
        }
    return Promise.reject(error);
    }
)

export const modifyTag = async (idx: number, tag: string) => {
    return await instance.put(`v1/admin/tag/${idx}`, {
        "tagName": tag
    }).catch(function(error) {
        return (error.response);
    })
}