import axios from 'common/axios';

export const submitSignInInfo = async (id: string, pw: string) => {
    return await axios.post(`/v1/login`, {
        "memberEmail": id,
        "memberPassword": pw
    }).catch(function(error) {
        return(error.response);
    })
}

export const submitSignUpInfo = async (id: string, pw: string, num: string) => {
    return await axios.post(`/v1/join`, {
        "memberClassNumber": num,
        "memberEmail": id,
        "memberPassword": pw
    }).catch(function(error) {
        return(error.response);
    })
}

export const submitEnrollNotice = async (content: string, title: string) => {
    return await axios.post(`/v1/notice`, {
        "content": content,
        "title": title
    }).catch(function(error) {
        console.log(error);
        return(error.response);
    })
}
