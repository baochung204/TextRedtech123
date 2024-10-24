import { axiosAPI } from 'src/api/axiosApi';

const url = 'order';

const OrderHistoryListApi = {
  getOrderHistoryList: () => {
    return axiosAPI.get(`/${url}/list-order-v2`);
  },
  getOrderHistoryDetail: (id: number) => {
    return axiosAPI.get(`/${url}/detail-order-v2?orderId=${id}`);
  },
};

export default OrderHistoryListApi;
