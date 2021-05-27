export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}
export const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem('refreshToken', refreshToken);
}
export const removeToken = () => {
    localStorage.removeItem('token');
}
export const removeRefreshToken = () => {
    localStorage.removeItem('refreshToken');
}
export const getAccessToken = () => typeof window !== 'undefined' ? localStorage.getItem('token'): null;
export const getRefreshToken = () => typeof window !== 'undefined' ? localStorage.getItem('refreshToken'): null;