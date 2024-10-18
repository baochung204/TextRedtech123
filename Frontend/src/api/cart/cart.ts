import { axiosAPI } from '../axiosApi';

const url = 'carts/me';

const cartAPI = {
  getAllCart: () => {
    return axiosAPI.get(`/${url}`);
  },
};

export default cartAPI;
