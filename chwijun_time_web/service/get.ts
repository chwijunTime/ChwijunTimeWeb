import { BaseUrl } from 'config/config.json';
import { getAccessToken } from 'service/token';
import axios from 'axios';
axios.defaults.baseURL = BaseUrl;
axios.defaults.headers.common['Authrization'] = `Bearer ${getAccessToken()}`;

export const getAllNotice = async () => {
    return await axios.get('/v1/notice', {       
    }).catch(function(error) {
        return (error.response);
    })
}

export const getAllMou = async () => {
    return await axios.get('/v1/contracting-company', {
    }).catch(function(error) {
        return (error.response);
    })
}
export const getAllJobNotice = async () => {
    return await axios.get('/v1/employment-announcement', {  
    }).catch(function(error) {
        return (error.response);
    })
}