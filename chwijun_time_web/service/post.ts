import axios from 'axios';
import { BaseUrl } from 'config/config.json';

export const submitSignInInfo = (id: string, pw: string) => {
    try {
        return axios.post(`${BaseUrl}/v1/login`, {
            "memberEmail": id,
            "memberPassword": pw
        });
    } catch (error) {
        throw(error)
    }
}

export const submitSignUpInfo = (id: string, pw: string, num: string) => {
    try {
        return axios.post(`${BaseUrl}/v1/join`, {num, id, pw})
    } catch (error) {
        throw(error)
    }
}

export const submitIdExist = (id: string) => {
    try {
        return axios.post(`${BaseUrl}/v1/email-check`, {id})
    } catch (error) {
        throw(error)
    }
}