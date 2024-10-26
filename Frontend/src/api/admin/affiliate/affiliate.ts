import { axiosAPI } from 'src/api/axiosApi';

const urlOverview = 'admin/affiliates/overview';

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
};

export default overviewAffiliateApi;
