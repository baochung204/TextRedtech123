import { axiosAPI } from 'src/api/axiosApi';

const url = 'points/list-point';

const listPointApi = {
  getListPoint: () => {
    return axiosAPI.get(`/${url}`);
  },
};

export default listPointApi;
