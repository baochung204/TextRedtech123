import { axiosAPI } from 'src/api/axiosApi';

const url = '/affiliate';

const affiliateUserApi = {
  getOverviewAffiliate: () => {
    return axiosAPI.get(`/affiliate-account/overview-in-user`);
  },
  getOrderList: (page: number, size: number) => {
    return axiosAPI.get(`${url}/page-orders?page_no=${page}&page_size=${size}`);
  },
  getPaymentHistoryList: (page: number, size: number) => {
    return axiosAPI.get(`${url}/history-payment?page_no=${page}&page_size=${size}`);
  },
  getCustomerList: (page: number, size: number) => {
    return axiosAPI.get(`${url}/customers?page_no=${page}&page_size=${size}`);
  },
};

export default affiliateUserApi;
