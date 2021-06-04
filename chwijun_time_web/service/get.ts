import { BaseUrl } from 'config/config.json';
import { getAccessToken } from 'service/token';
import axios from 'axios';

const instance = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Authorization': `Bearer ${getAccessToken()}`
    }
  });

  
export const getAllNotice = async () => {
    return await instance.get('/v1/notice', {       
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
export const getAllJobNotice = async () => {
    return await instance.get('/v1/employment-announcement', {  
    }).catch(function(error) {
        return (error.response);
    })
}