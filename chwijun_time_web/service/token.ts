export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}

export const getAccessToken = () => typeof window !== 'undefined' ? localStorage.getItem('token'): null;
