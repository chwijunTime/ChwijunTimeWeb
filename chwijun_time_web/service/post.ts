import axios from 'common/axios';
import { BaseUrl } from 'config/config.json';
import { getAccessToken } from './token';

export const submitSignInInfo = (id: string, pw: string) => {
    return axios.post(`/v1/login`, {
        "memberEmail": id,
        "memberPassword": pw
    }).catch(function(error) {
        return(error.response);
    })

}

export const submitSignUpInfo = (id: string, pw: string, num: string) => {
    return axios.post(`/v1/join`, {
        "memberClassNumber": num,
        "memberEmail": id,
        "memberPassword": pw
    }).catch(function(error) {
        return(error.response);
    })
}

export const submitEnrollNotice = (content: string, title: string) => {
    return axios.post(`/v1/notice`, {
        "content": content,
        "title": title
    }).catch(function(error) {
        console.log(error);
        return(error.response);
    })
}
