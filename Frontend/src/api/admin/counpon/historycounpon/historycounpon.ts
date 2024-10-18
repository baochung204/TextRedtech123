import { axiosAPI } from 'src/api/axiosApi';

const url = 'vnd-coupon/history-used-vndcoupon';

const CounponHistoryApi = {
  getAllHistoryCounpon: () => {
    return axiosAPI.get(`/${url}`);
  },
};

export default CounponHistoryApi;
