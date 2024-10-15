import axios from 'axios';
// import store from 'src/store/Store';

export const axiosAPI = axios.create({
    baseURL: 'https://redai02-4af4309fd76b.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

// axiosAPI.interceptors.request.use(
//     (config) => {
//         if (!config.headers) {
//             config.headers = {};
//         }
//         // Lấy token từ Redux store
//         const state = store.getState();
//         const token = state.user.token; // Điều chỉnh theo cấu trúc state của bạn
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );