import { axiosAPI } from '../axiosApi';

const twoFA = {
  getStatus2fa: () => {
    return axiosAPI.get(`/api/v1/users/me/2fa`);
  },
};

export default twoFA;
