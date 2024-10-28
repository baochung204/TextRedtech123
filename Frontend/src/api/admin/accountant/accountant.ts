import { axiosAPI } from 'src/api/axiosApi';

export interface PropsContractAffiliate {
  page_no?: number | null | undefined;
  page_size?: number | null | undefined;
  sort_by?: string | null | undefined;
  sort_dir?: string | null | undefined;
  search_key?: string | null | undefined;
  begin?: string | null | undefined;
  end?: string | null | undefined;
}

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
  getListBill: (object: PropsContractAffiliate = {}) => {
    const urls = `/${url}/page`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
};

export default accountantApi;
