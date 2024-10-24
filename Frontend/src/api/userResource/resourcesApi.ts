import { axiosAPI } from '../axiosApi';

const url = 'user-resources';

const resourcesApi = {
  getAllFiles: (page?: number | undefined, size?: number | undefined) => {
    return axiosAPI.get(`/${url}/files?page=${page}&size=${size}`);
  },
  getAllURL: (page?: number | undefined, size?: number | undefined) => {
    return axiosAPI.get(`/${url}/urls?page=${page}&size=${size}`);
  },
  getAllModels: (page: number, size: number) => {
    return axiosAPI.get(`/${url}/models?page=${page}&size=${size}`);
  },
  getAllImages: (page?: number | undefined, size?: number | undefined) => {
    return axiosAPI.get(`/${url}/images?page=${page}&size=${size}`);
  },
  getAllFunctions: (page?: number | undefined, size?: number | undefined) => {
    return axiosAPI.get(`/${url}/functions?page=${page}&size=${size}`);
  },
  getAllCampaigns: (page?: number | undefined, size?: number | undefined) => {
    return axiosAPI.get(`/${url}/campaigns?page=${page}&size=${size}`);
  },
};
export default resourcesApi;
