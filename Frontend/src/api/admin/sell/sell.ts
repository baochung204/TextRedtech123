import { axiosAPI } from 'src/api/axiosApi';

const url = 'redtech';

const sellAdminApi = {
  getOverviewOrderProduct: () => {
    return axiosAPI.get(`/${url}/order/overview`);
  },
  getOverviewProduct: () => {
    return axiosAPI.get(`/${url}/product/overview`);
  },
};

export default sellAdminApi;
