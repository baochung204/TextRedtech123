import { axiosAPI } from 'src/api/axiosApi';

export interface PropsSell {
  page_no?: number | null | undefined;
  page_size?: number | null | undefined;
  sort_by?: string | null | undefined;
  sort_dir?: string | null | undefined;
  search_key?: string | null | undefined;
  begin?: string | null | undefined;
  end?: string | null | undefined;
}

const url = 'redtech';

const sellAdminApi = {
  getOverviewOrderProduct: () => {
    return axiosAPI.get(`/${url}/order/overview`);
  },
  getOverviewProduct: () => {
    return axiosAPI.get(`/${url}/product/overview`);
  },
  getListOrderSell: (object: PropsSell = {}) => {
    const urls = `/${url}/order/orders`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
  getDetailOrderProduct: (id: number) => {
    return axiosAPI.get(`/${url}/order/orders-v2/${id}`);
  },
};

export default sellAdminApi;
