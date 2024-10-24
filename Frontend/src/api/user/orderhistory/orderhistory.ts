import { axiosAPI } from 'src/api/axiosApi';

const url = 'order/list-order-v2';

const OrderHistoryListApi = {
  getOrderHistoryList: () => {
    return axiosAPI.get(`/${url}`);
  },
};

export default OrderHistoryListApi;
