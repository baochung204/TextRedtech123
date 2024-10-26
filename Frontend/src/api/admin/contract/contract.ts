import { axiosAPI } from 'src/api/axiosApi';

const url = 'hop-dong';

const contractApi = {
  getOverviewContractAffiliate: () => {
    return axiosAPI.get(`/${url}/affiliate/overview`);
  },
  getOverviewContractRule: () => {
    return axiosAPI.get(`/${url}/nguyen-tac/overview`);
  },
};

export default contractApi;
