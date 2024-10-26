import axios from 'axios';

export const axiosAPI = axios.create({
  baseURL: 'https://redai02-4af4309fd76b.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    'accept': '*/*'
  },
});

axiosAPI.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      if (!config.headers) {
        config.headers = {};
      }

      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('accessToken');
    }
    return Promise.reject(error);
  },
);
