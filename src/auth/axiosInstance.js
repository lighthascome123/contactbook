import axios from 'axios';
import authHeader from './authHeader';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

instance.interceptors.request.use(
  config => {
    const token = authHeader().Authorization;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
