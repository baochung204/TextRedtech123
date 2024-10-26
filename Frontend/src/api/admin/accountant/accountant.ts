import { axiosAPI } from 'src/api/axiosApi';

const url = 'ke-toan/hoadon';

const accountantApi = {
  getOverviewBillAffiliate: () => {
    return axiosAPI.get(`/${url}/overview`);
  },
  getListBillAffiliate: () => {
    return axiosAPI.get(`/${url}/page`);
  },
  getDetailBillAffiliate: () => {
    return axiosAPI.get(`/${url}/lay-hoa-don`);
  },
};

export default accountantApi;
