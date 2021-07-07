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
            data.success ? setAccessToken(data.data.newToken) : (alert("로그인 후 이용가능합니다."), window.location.replace('/'));
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
export const modifyNotice = async (title: string, content: string, idx: number) => {
    return await instance.put(`v1/admin/notice/${idx}`, {
        "content": content,
        "title": title
    }).catch(function(error) {
        return (error.response);
    })
}
export const modifyMou = async (name:string, business: string, location: string, address: string, etc: string,
    salary: string, tag: string[], idx: number) => {
        return await instance.put(`v1/admin/contracting-company/${idx}`, {
            "contractingArea": location,
            "contractingBusinessAreas": business,
            "contractingCompanyAboutUs": etc,
            "contractingCompanyAddress": address,
            "contractingCompanyAverageAnnualSalary": salary,
            "contractingCompanyName": name,
            "tagName": tag
        }).catch(function(error) {
            return (error.response);
        })
    }
export const modifyEmployment = async (name: string, area: string, address: string,
    etc: string, site: string, student: string, tag: string[], idx: number) => {
        return await instance.put(`/v1/admin/employment-confirmation/${idx}`, {
            "employmentConfirmationAddress": address,
            "employmentConfirmationAreas": area,
            "employmentConfirmationEtc": etc,
            "employmentConfirmationName": name,
            "employmentConfirmationSite": site,
            "studentName":student,
            "tagName": tag
        }).catch(function(error) {
            return (error.response);
        })
    }
export const modifyReview = async (name: string, review: string, address: string, date: string,
    question: string, cost: number, tag: string[], idx) => {
        return await instance.put(`/v1/companyreview/${idx}`, {
            "companyAddress": address,
            "companyCost": cost,
            "companyDateofApplication": date,
            "companyFrequentlyAskedQuestions": question,
            "companyName": name,
            "companyReviews": review,
            "tagName": tag
        }).catch(function(error) {
            return (error.response);
        })
    }
export const modifyJobNotice = async (name: string, field: string, explain: string, condition: string,
    location: string, etc: string, tag: string[], idx: number) => {
        return await instance.put(`/v1/admin/employment-announcement/${idx}`, {
            "employmentAnnouncementAddress": location,
            "employmentAnnouncementEtc": etc,
            "employmentAnnouncementExplanation": explain,
            "employmentAnnouncementName": name,
            "preferentialConditions":condition,
            "recruitmentField": field,
            "tagName": tag
        }).catch(function(error) {
            return (error.response);
        })
    }
export const modifyStorage = async (name: string, address: string, info: string, tag: string[], idx: number) => {
    return await instance.put(`/v1/tips-storage/${idx}`, {
        "tagName": tag,
        "tipsInfo": info,
        "workCompanyAddress": address,
        "workCompanyName": name
    }).catch(function(error) {
        return (error.response);
    })
}
export const modifyPortfolio = async (url: string, idx: number) => {
    return await instance.put(`v1/portfolio/${idx}`, {
        "notionPortfolioURL": url
    }).catch(function(error) {
        return (error.response);
    })
}
export const modifyResume = async (url: string, idx: number) => {
    return await instance.put(`v1/resume/${idx}`, {
        "resumeFileURL": url
    }).catch(function(error) {
        return (error.response);
    })
}