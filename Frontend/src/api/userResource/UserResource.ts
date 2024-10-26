import { axiosAPI } from '../axiosApi';

const url = 'user-resources';

export interface PropFileResource {
  page?: number | null | undefined;
  size?: number | null | undefined;
  search_name?: string | null | undefined;
}

const userApi = {
  // getAllFiles: (page?: number, size?: number) => {
  //   return axiosAPI.get(`/${url}/files?page=${page}&size=${size}`);
  // },
  getAllFiles: (object: PropFileResource = {}) => {
    const urls = `/${url}/files`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
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
