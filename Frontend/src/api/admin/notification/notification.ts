import { axiosAPI } from 'src/api/axiosApi';

const url = 'redtech/notifications';

const notificationAdminApi = {
  getOverviewNotification: () => {
    return axiosAPI.get(`/${url}/overview`);
  },
  getListNotification: () => {
    return axiosAPI.get(`/${url}/notifications`);
  },
};

export default notificationAdminApi;
