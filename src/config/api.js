import { create } from 'apisauce';

export const proxyAPI = create({
    baseURL: 'http://localhost:8081/api',
    headers: {
        'Content-Type': 'application/json',
        user: null,
        token: null
    },
    timeout: 10000
});
