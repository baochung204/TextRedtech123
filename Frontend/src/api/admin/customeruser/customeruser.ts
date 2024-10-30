import { axiosAPI } from 'src/api/axiosApi';

export interface PropsCustomerUser {
  page?: number | null | undefined;
  size?: number | null | undefined;
  sort_by?: string | null | undefined;
  sort_dir?: string | null | undefined;
  search_key?: string | null | undefined;
  begin?: string | null | undefined;
  end?: string | null | undefined;
}

const url = 'converts';

const customerUserApi = {
  getListCustomerUser: (object: PropsCustomerUser = {}) => {
    const urls = `/${url}/customers`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
  getDetailCustomerUser: (id: number) => {
    return axiosAPI.get(`/${url}/customers/${id}/detail`);
  },
};

export default customerUserApi;
