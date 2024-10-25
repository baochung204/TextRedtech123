import { axiosAPI } from 'src/api/axiosApi';

const url = '/affiliate';

const affiliateUserApi = {
  getOrderList: (page: number, size: number) => {
    return axiosAPI.get(`${url}/page-orders?page_no=${page}&page_size=${size}`);
  },
  getPaymentHistoryList: () => {
    return axiosAPI.get(`${url}/history-payment`);
  },
  getCustomerList: () => {
    return axiosAPI.get(`${url}/customers`);
  },
};

export default affiliateUserApi;
