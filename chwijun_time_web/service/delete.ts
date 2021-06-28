import { BaseUrl } from 'config/config.json';
import { getAccessToken, setAccessToken, getRefreshToken } from 'service/token';
import axios from 'axios';

const instance = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Authorization': `Bearer ${getAccessToken()}`
    },
    timeout: 1000
});

instance.interceptors.response.use(
    (response) => {
        console.log("delete success: ", response);
        return response;
    }, async (error) => {
        console.log('delete 401 error');
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

export const deleteConsult = async (idx: number) => {
    return await instance.delete(`v1/admin/consulting-admin/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const deleteNotice = async (idx: number) => {
    return await instance.delete(`v1/admin/notice/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const deleteJobNotice = async (idx: number) => {
    return await instance.delete(`v1/admin/employment-announcement/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const deleteMou = async (idx: number) => {
    return await instance.delete(`v1/admin/contracting-company/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const deleteEmployment = async (idx: number) => {
    return await instance.delete(`v1/admin/employment-confirmation/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const deleteReview = async (idx: number) => {
    return await instance.delete(`v1/companyreview/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const deleteStorage = async (idx: number) => {
    return await instance.delete(`v1/tips-storage/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}