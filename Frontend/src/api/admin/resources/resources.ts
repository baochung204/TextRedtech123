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

const url = 'redtech/resources';

const resourcesAdminApi = {
  getOverviewCampaign: () => {
    return axiosAPI.get(`/${url}/campaignOverview`);
  },
  getOverviewFunction: () => {
    return axiosAPI.get(`/${url}/functionOverview`);
  },
  getOverviewFiles: () => {
    return axiosAPI.get(`/${url}/fileOverview`);
  },
  getOverviewModel: () => {
    return axiosAPI.get(`/${url}/modelOverview`);
  },
  getAllDataCampaign: (object: PropsAffiliate = {}) => {
    const urls = `/${url}/campaigns`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
  getAllDataFunction: (object: PropsAffiliate = {}) => {
    const urls = `/${url}/functions`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
  getAllDataFiles: (object: PropsAffiliate = {}) => {
    const urls = `/${url}/files`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
  getAllDataModel: (object: PropsAffiliate = {}) => {
    const urls = `/${url}/models`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
};

export default resourcesAdminApi;
