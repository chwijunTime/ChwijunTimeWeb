import { BaseUrl } from 'config/config.json';
import { getAccessToken } from 'service/token';
import axios from 'axios';

const instance = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Authorization': `Bearer ${getAccessToken()}`
    }
});

export const submitSignInInfo = async (id: string, pw: string) => {
    return await instance.post(`/v1/login`, {
        "memberEmail": id,
        "memberPassword": pw
    }).catch(function(error) {
        return(error.response);
    })
}

export const submitSignUpInfo = async (id: string, pw: string, num: string) => {
    return await instance.post(`/v1/join`, {
        "memberClassNumber": num,
        "memberEmail": id,
        "memberPassword": pw
    }).catch(function(error) {
        return(error.response);
    })
}

export const submitEnrollNotice = async (content: string, title: string) => {
    return await instance.post(`/v1/notice`, {
        "content": content,
        "title": title
    }).catch(function(error) {
        console.log(error);
        return(error.response);
    })
}
export const submitEnrollJobNotice = async (name: string, field: string, explain: string, sweetener: string,
    location: string, deadline: string, other: string, tag: string[]) => {
        return await instance.post(`/v1/employment-announcement`, {
            "deadLine": deadline,
            "employmentAnnouncementAddress": location,
            "employmentAnnouncementEtc": other,
            "employmentAnnouncementExplanation": explain,
            "employmentAnnouncementName": name,
            "preferentialConditions": sweetener,
            "recruitmentField": field,
            "tagName": tag
        }).catch(function(error) {
            console.log(error);
            return(error.response);
        })
}