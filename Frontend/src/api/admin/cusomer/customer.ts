import { axiosAPI } from 'src/api/axiosApi';

const url = 'redtech/customer';

const customerAdminApi = {
  getOverviewCustomer: () => {
    return axiosAPI.get(`/${url}/overview`);
  },
  getOverviewFunction: () => {
    return axiosAPI.get(`/${url}/functionOverview`);
  },
};

export default customerAdminApi;
