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

const urlOverview = 'admin/affiliates/overview';
const url = 'admin/affiliates';

const overviewAffiliateApi = {
  getAllOverviewOrderAffiliate: () => {
    return axiosAPI.get(`/${urlOverview}/order-affiliate`);
  },
  getAllOverviewPublisher: () => {
    return axiosAPI.get(`/${urlOverview}/publisher`);
  },
  getAllOverviewWithdrawalHistory: () => {
    return axiosAPI.get(`/${urlOverview}/withdrawal-history`);
  },
  getListOrderAffiliate: (object: PropsAffiliate = {}) => {
    const urls = `/${url}/list-order-affiliate`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
};

export default overviewAffiliateApi;
