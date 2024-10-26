import { axiosAPI } from 'src/api/axiosApi';

const url = 'order';

export interface PropOrderHistoryList {
  page_no?: number | null | undefined,
  page_size?: number | null | undefined,
  sort_by?: string | null | undefined,
  sort_dir?: string | null | undefined,
  search_key?: string | null | undefined,
  begin?: string | null | undefined,
  end?: string | null | undefined,
}



const OrderHistoryListApi = {
  getOrderHistoryList: (object: PropOrderHistoryList = {}) => {
    const urls = `/${url}/list-order-v2`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
  getOrderHistoryDetail: (orderId: number) => {
    return axiosAPI.get(`/${url}/detail-order-v2?orderId=${orderId}`);
  },
};

export default OrderHistoryListApi;
