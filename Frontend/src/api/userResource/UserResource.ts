import { axiosAPI } from "../axiosApi";

const url = 'user-resources'

const userApi = {
    getAllFiles: () => {
        return axiosAPI.get(`/${url}/files`);
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