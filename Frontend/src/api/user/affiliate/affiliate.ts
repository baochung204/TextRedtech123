import { axiosAPI } from 'src/api/axiosApi';

export interface PropsAffiliate {
  page_no?: number | null | undefined;
  page_size?: number | null | undefined;
  sort_by?: string | null | undefined;
  sort_dir?: string | null | undefined;
  search_key?: string | null | undefined;
  begin?: string | null | undefined;
  end?: string | null | undefined;
}

const url = '/affiliate';

const affiliateUserApi = {
  getOverviewAffiliate: () => {
    return axiosAPI.get(`/affiliate-account/overview-in-user`);
  },
  getOrderList: (object: PropsAffiliate = {}) => {
    const urls = `${url}/page-orders`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
  getPaymentHistoryList: (object: PropsAffiliate = {}) => {
    const urls = `${url}/history-payment`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
  getCustomerList: (object: PropsAffiliate = {}) => {
    const urls = `${url}/customers`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
};

export default affiliateUserApi;
