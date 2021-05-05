import axios from 'axios';

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}

export const getAccessToken = () => localStorage.getItem('token');