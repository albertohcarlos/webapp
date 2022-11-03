import { proxyAPI } from 'config/api';

export const searchQuery = query =>{
    console.log("REACT_APP_API_URL: " + process.env.REACT_APP_API_URL)
    proxyAPI.get(`/search/${query}`).then(res => res)
    .catch(()=>console.log('Error getting search request');
    
}

export const getItem = id =>
    proxyAPI.get(`/item/${id}`).then(res => res)
    .catch(()=>console.log('Error getting search request');
