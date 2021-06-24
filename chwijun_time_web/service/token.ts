export const setAccessToken = (token: string) => {
    localStorage.setItem('accessToken', token);
}
export const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem('refreshToken', refreshToken);
}
export const removeToken = () => {
    localStorage.clear();
}
export const removeRefreshToken = () => {
    localStorage.removeItem('refreshToken');
}
export const getAccessToken = () => typeof window !== 'undefined' ? localStorage.getItem('accessToken'): null;
export const getRefreshToken = () => typeof window !== 'undefined' ? localStorage.getItem('refreshToken'): null;