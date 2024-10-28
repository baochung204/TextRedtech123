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

const url = 'hop-dong';

const contractApi = {
  getOverviewContractAffiliate: () => {
    return axiosAPI.get(`/${url}/affiliate/overview`);
  },
  getListContractAffiliate: (object: PropsContractAffiliate = {}) => {
    const urls = `/${url}/affiliate/page`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
  getOverviewContractRule: () => {
    return axiosAPI.get(`/${url}/nguyen-tac/overview`);
  },
  getListContractRule: (object: PropsContractAffiliate = {}) => {
    const urls = `/${url}/nguyen-tac/page`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
};

export default contractApi;
