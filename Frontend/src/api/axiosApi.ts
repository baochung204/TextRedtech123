
import axios from 'axios';

// Create an axios instance
export const axiosAPI = axios.create({
    baseURL: 'https://redai02-4af4309fd76b.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add an interceptor to attach the accessToken to the headers
axiosAPI.interceptors.request.use(
    (config) => {
        // Retrieve the accessToken from localStorage
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            // Ensure headers are defined before adding the Authorization header
            if (!config.headers) {
                config.headers = {};
            }

            // Attach the token to the Authorization header
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle token expiration or errors (optional)
axiosAPI.interceptors.response.use(
    (response) => response,
    (error) => {
        // Check for 401 or token expiration errors and handle appropriately
        if (error.response && error.response.status === 401) {
            // You might want to remove the invalid token or redirect to login
            localStorage.removeItem('accessToken');
            // Optionally redirect to login page, etc.
        }
        return Promise.reject(error);
    }
);
