import { axiosAPI } from 'src/api/axiosApi';

const url = 'vnd-coupon/get-list';

const CounponListApi = {
  getCounponList: () => {
    return axiosAPI.get(`/${url}`);
  },
};

export default CounponListApi;
