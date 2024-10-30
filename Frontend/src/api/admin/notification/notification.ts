import { axiosAPI } from 'src/api/axiosApi';

export interface PropsNotificationAdmin {
  page_no?: number | null | undefined;
  page_size?: number | null | undefined;
  sort_by?: string | null | undefined;
  sort_dir?: string | null | undefined;
  search_key?: string | null | undefined;
  begin?: string | null | undefined;
  end?: string | null | undefined;
}

const url = '/admin/notifications';

const notificationAdminApi = {
  getOverviewNotification: () => {
    return axiosAPI.get(`/${url}/overview`);
  },
  getListNotification: (object: PropsNotificationAdmin = {}) => {
    const urls = `/${url}/notifications`;
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = query ? `${urls}?${query}` : urls;

    return axiosAPI.get(`${fullUrl}`);
  },
};

export default notificationAdminApi;
