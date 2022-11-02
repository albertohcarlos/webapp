import { create } from 'apisauce';

export const proxyAPI = create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        user: null,
        token: null
    },
    timeout: 10000
});
