import axios from 'axios';
import { BaseUrl } from 'config/config.json';

export const getAllNotice = async (token: String) => {
    const response = await axios.get(`${BaseUrl}/notice`, {
        
    })
}