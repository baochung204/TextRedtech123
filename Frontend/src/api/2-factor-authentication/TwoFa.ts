import { axiosAPI } from '../axiosApi';

const twoFA = {
  getStatus2fa: () => {
    return axiosAPI.get(`/users/me/2fa`);
  },
};

export default twoFA;
