import { proxyAPI } from 'config/api';

export const searchQuery = query =>
    proxyAPI.get(`/search/${query}`).then(res => res);

export const getItem = id =>
    proxyAPI.get(`/item/${id}`).then(res => res);
