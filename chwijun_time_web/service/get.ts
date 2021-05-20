import axios from 'common/axios';

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