import { axiosAPI } from 'src/api/axiosApi';

const url = 'vnd-coupon/overview';

const overviewCounponApi = {
  getAllOverviewCounpon: () => {
    return axiosAPI.get(`/${url}`);
  },
};

export default overviewCounponApi;
