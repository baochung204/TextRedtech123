import { axiosAPI } from '../axiosApi';

const url = 'user-resources';

const userApi = {
  getAllFiles: (page?: number, size?: number) => {
    return axiosAPI.get(`/${url}/files?page=${page}&size=${size}`);
  },
  // getAllURL: (page?: number, size?: number) => {
  //   return axiosAPI.get(`/${url}/urls`);
  // },
  // getAllModels: (page?: number, size?: number) => {
  //   return axiosAPI.get(`/${url}/models`);
  // },
  // getAllImages: (page?: number, size?: number) => {
  //   return axiosAPI.get(`/${url}/images`);
  // },
  getAllFunction: (page?: number, size?: number) => {
    return axiosAPI.get(`/${url}/functions?page=${page}&size=${size}`);
  },
  getAllCampaigns: (page?: number, size?: number) => {
    return axiosAPI.get(`/${url}/campaigns?page=${page}&size=${size}`);
  },
};
export default userApi;
