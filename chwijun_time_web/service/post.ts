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

export const TokenRefresh = async () => {
    return await instance.post(`v1/auth/refresh`, {
        "refreshToken": getRefreshToken()
    }).catch(function(error) {
        return (error.response);
    })
}
export const Logout = async () => {
    return await instance.post(`v1/logout`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const submitEnrollNotice = async (title: string, content: string) => {
    return await instance.post(`/v1/admin/notice`, {
        "content": content,
        "title": title
    }).catch(function(error) {
        return(error.response);
    })
}
export const submitEnrollJobNotice = async (name: string, field: string, explain: string, condition: string,
    location: string, deadline: string, etc: string, tag: string[]) => {
        return await instance.post(`/v1/admin/employment-announcement`, {
            "deadLine": deadline,
            "employmentAnnouncementAddress": location,
            "employmentAnnouncementEtc": etc,
            "employmentAnnouncementExplanation": explain,
            "employmentAnnouncementName": name,
            "preferentialConditions": condition,
            "recruitmentField": field,
            "tagName": tag
        }).catch(function(error) {
            return(error.response);
        })
}
export const submitEnrollMou = async (name: string, business: string, area: string, address: string, etc: string, salary: string,
    tag: string[]) => {
        return await instance.post(`/v1/admin/contracting-company`, {
            "contractingBusinessAreas": business,
            "contractingArea": area,
            "contractingCompanyAboutUs": etc,
            "contractingCompanyAddress": address,
            "contractingCompanyAverageAnnualSalary": salary,
            "contractingCompanyName": name,
            "tagName": tag
        }).catch(function(error) {
            return(error.response);
    })
}
export const submitEnrollConsult = async (date: string) => {
    return await instance.post(`/v1/admin/consulting-admin`, {
        "applicationDate": date
    }).catch(function(error) {
        return(error.response);
    })
}
export const submitApplyConsult = async (number: string, name: string, consultIdx) => {
    return await instance.post(`/v1/consulting-user?idx=${consultIdx}`, {
        "classNumber": number,
        "name": name
    }).catch(function(error) {
        return(error.response);
    })
}
export const submitEnrollEmployment = async (name: string, area: string, address: string,
    etc: string, generation: string, site: string, student: string, tag: string[]) => {
        return await instance.post(`/v1/admin/employment-confirmation`, {
            "employmentConfirmationAddress": address,
            "employmentConfirmationAreas": area,
            "employmentConfirmationEtc": etc,
            "employmentConfirmationGeneration": generation,
            "employmentConfirmationName": name,
            "employmentConfirmationSite": site,
            "studentName": student,
            "tagName": tag
        }).catch(function(error) {
            return(error.response);
        })
    }
export const submitEnrollReview = async (name: string, review: string, address: string, date: string,
    question: string, cost: number, tag: string[]) => {
        return await instance.post('v1/companyreview', {
            "companyAddress": address,
            "companyCost": cost,
            "companyDateofApplication": date,
            "companyFrequentlyAskedQuestions": question,
            "companyName": name,
            "companyReviews": review,
            "tagName": tag
        }).catch(function(error) {
            return(error.response);
        })
}

export const submitEnrollStorage = async (name: string, address: string, info: string, tag: string[]) => {
    return await instance.post('v1/tips-storage', {
        "tagName": tag,
        "tipsInfo": info,
        "workCompanyAddress": address,
        "workCompanyName": name
    }).catch(function(error) {
        return (error.response);
    })
}
export const submitAcceptCorrection = async (number: string, content: string, idx: number) => {
    return await instance.post(`v1/admin/correction-approval?idx=${idx}`, {
        "classNumber": number,
        "correctionContent": content
    }).catch(function(error) {
        return (error.response);
    })
}
export const submitRejectCorrection = async (number: string, content: string, idx: number) => {
    return await instance.post(`v1/admin/correction-rejection?idx=${idx}`, {
        "classNumber": number,
        "reasonForRejection": content
    }).catch(function(error) {
        return (error.response);
    })
}
export const submitApplyJobNotice = async (PortfolioUrl: string, ResumeUrl: string,
    GithubUrl: string, idx: number) => {
        return await instance.post(`v1/application/${idx}`, {
            "applicationEmploymentPortfolioURL": PortfolioUrl,
            "applicationEmploymentResumeURL": ResumeUrl,
            "gitHubURL": GithubUrl
        }).catch(function(error) {
            return (error.response);
        })
    }
export const submitAcceptJobNotice = async (idx: number) => {
    return await instance.post(`v1/admin/application-accept/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const submitRejectJobNotice = async (idx: number) => {
    return await instance.post(`v1/admin/application-reject/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}
export const submitTag = async (tag: string) => {
    return await instance.post(`v1/admin/tag`, {
        "tagName": tag
    }).catch(function(error) {
        return (error.response);
    })
}
export const submitRequestTag = async (tag: string) => {
    return await instance.post(`v1/request-tag`, {
        "tagName": tag
    }).catch(function(error) {
        return (error.response);
    })
}
export const submitPortfolio = async (url) => {
    return await instance.post('v1/portfolio', {
        'notionPortfolioURL': url
    }).catch(function(error) {
        return (error.response)
    })
}
export const submitResume = async (url) => {
    return await instance.post('v1/resume', {
        'resumeFileURL': url
    }).catch(function(error) {
        return (error.response)
    })
}