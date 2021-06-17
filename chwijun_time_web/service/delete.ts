import { BaseUrl } from 'config/config.json';
import { getAccessToken } from 'service/token';
import axios from 'axios';

const instance = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Authorization': `Bearer ${getAccessToken()}`
    }
});

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
export const deleteMou = async (idx: number) => {
    return await instance.delete(`v1/admin/contracting-company/${idx}`, {
    }).catch(function(error) {
        return (error.response);
    })
}