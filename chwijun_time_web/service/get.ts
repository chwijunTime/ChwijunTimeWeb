import { BaseUrl } from 'config/config.json';
import { setAccessToken, getAccessToken, getRefreshToken } from 'service/token';
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
        console.log("success: ", response);
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

export const getAllNotice = async () => {
    return await instance.get('/v1/notice', {       
    }).catch(function(error) {
        return (error.response);
    })
}
export const getIdxNotice = async (idx: number) => {
    return await instance.get(`v1/notice/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getAllMou = async () => {
    return await instance.get('/v1/contracting-company', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getIdxMou = async (idx: number) => {
    return await instance.get(`v1/contracting-company/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getAllJobNotice = async () => {
    return await instance.get('/v1/employment-announcement', {  
    }).catch(function(error) {
        return (error.response);
    })
}
export const getIdxJobNotice = async (idx: number) => {
    return await instance.get(`/v1/employment-announcement/${idx}`, {
    }).catch(function(error) {
        return (error.reponse);
    })
}
export const getAllApplyJobNotice = async (status: string) => {
    return await instance.get(`/v1/admin/application-status?status=${status}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getSearchJobNotice = async (string: string) => {
    return await instance.get(`v1/application-keyword?keyword=${string}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getApplyJobNotice = async (idx: number) => {
    return await instance.get(`v1/admin/application/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getAllTag = async () => {
    return await instance.get('/v1/tag', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getSearchMou = async (keyword: string) => {
    return await instance.get('v1/contracting-company-keyword', {
        params: {
            "keyword": keyword
        }
    }).catch(function(error) {
        return (error.response);
    })
}
export const getAllConsultUser = async () => {
    return await instance.get('/v1/admin/consulting-user', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getAllConsultAdmin = async () => {
    return await instance.get('/v1/consulting-admin', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getUserInfo = async () => {
    return await instance.get('/v1/userinfo', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getAllEmployment = async () => {
    return await instance.get('v1/employment-confirmation', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getIdxEmployment = async (idx: number) => {
    return await instance.get(`v1/employment-confirmation/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getAllReview = async () => {
    return await instance.get('v1/companyreview', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getIdxReview = async (idx: number) => {
    return await instance.get(`v1/companyreview/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getAllStorage = async () => {
    return await instance.get('v1/tips-storage', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getIdxStorage = async (idx: number) => {
    return await instance.get(`v1/tips-storage/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getAllCorrection = async () => {
    return await instance.get(`v1/admin/correction`, {
    }).catch(function(error) {
        return (error.response);
    })
}


export const getMyPageJobNotice = async () => {
    return await instance.get('v1/mypage-application-employment', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getMyPageReview = async () => {
    return await instance.get('v1/mypage-company-review', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getMyPageConsult = async () => {
    return await instance.get('v1/mypage-consulting-user', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getMyPageCorrection = async () => {
    return await instance.get('v1/mypage-correction', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getMyPageApplyCorrection = async () => {
    return await instance.get('v1/mypage-correction-apply', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getMyPagePortfolio = async () => {
    return await instance.get('v1/mypage-portfolio', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getMyPageResume = async () => {
    return await instance.get('v1/mypage-resume', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getMyPageStorage = async () => {
    return await instance.get('v1/mypage-tip-user', {
    }).catch(function(error) {
        return (error.response);
    })
}