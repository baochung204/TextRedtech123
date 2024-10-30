import { axiosAPI } from 'src/api/axiosApi';

export interface PropsCustomerAdmin {
  page_no?: number | null | undefined;
  page_size?: number | null | undefined;
  sort_by?: string | null | undefined;
  sort_dir?: string | null | undefined;
  search_key?: string | null | undefined;
  begin?: string | null | undefined;
  end?: string | null | undefined;
}

const url = 'redtech/customer';

const customerAdminApi = {
  getOverviewCustomer: () => {
    return axiosAPI.get(`/${url}/overview`);
  },
  getOverviewFunction: () => {
    return axiosAPI.get(`/${url}/functionOverview`);
  },
  getCustomerListAdmin: (object: PropsCustomerAdmin = {}) => {
    const urls = `/${url}/customers`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
};

export default customerAdminApi;
