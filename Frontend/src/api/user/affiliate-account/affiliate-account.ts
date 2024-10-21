import { axiosAPI } from '../../axiosApi';

const url = 'affiliate-account';

const affiliateApi = {
  getAllaffiliate: () => {
    return axiosAPI.get(`/${url}/info-affiliate`);
  },
};

export default affiliateApi;
