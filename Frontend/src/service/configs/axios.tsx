import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://redai02-4af4309fd76b.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    return Promise.reject(error);
  },
);

export default instance;