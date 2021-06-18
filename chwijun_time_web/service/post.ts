import { BaseUrl } from 'config/config.json';
import { getAccessToken } from 'service/token';
import axios from 'axios';

const instance = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Authorization': `Bearer ${getAccessToken()}`
    }
});

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
    tag: any[]) => {
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