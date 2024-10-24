import { axiosAPI } from 'src/api/axiosApi';

const url = 'vnd-coupon/get-coupon';

const listRandomCounponApi = {
  getListCouponRandom: (point: number) => {
    return axiosAPI.get(`/${url}?point=${point}`);
  },
};

export default listRandomCounponApi;
