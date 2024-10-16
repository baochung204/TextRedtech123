import { axiosAPI } from "../axiosApi";

const url = 'user-resources'

const userApi = {
    getAllFiles: (page?: number, size?: number) => {
        return axiosAPI.get(`/${url}/files?file=${page}&size=${size}`);
    },
    getAllURL: () => {
        return axiosAPI.get(`/${url}/urls`);
    },
    getAllModels: () => {
        return axiosAPI.get(`/${url}/models`);
    },
    getAllImages: () => {
        return axiosAPI.get(`/${url}/images`);
    },
    getAllFunction: () => {
        return axiosAPI.get(`/${url}/function`);
    },
    getAllCampaigns: () => {
        return axiosAPI.get(`/${url}/campaigns`);
    },
};

export default userApi;