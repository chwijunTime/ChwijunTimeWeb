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
            data.success ? setAccessToken(data.data.newToken) : (alert("로그인 후 이용가능합니다."), window.location.replace('/'));
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
export const deleteTag = async (idx: number) => {
    return await instance.delete(`v1/admin/tag/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const deleteApplyTag = async (idx: number) => {
    return await instance.delete(`v1/admin/request-tag/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const deleteMyPortfolio = async (idx: number) => {
    return await instance.delete(`v1/portfolio/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const deleteMyResume = async (idx: number) => {
    return await instance.delete(`v1/resume/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}