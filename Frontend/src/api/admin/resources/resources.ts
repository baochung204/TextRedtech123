import { axiosAPI } from 'src/api/axiosApi';

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
  getAllDataCampaign: () => {
    return axiosAPI.get(`/${url}/campaigns`);
  },
  getAllDataFunction: () => {
    return axiosAPI.get(`/${url}/functions`);
  },
  getAllDataFiles: () => {
    return axiosAPI.get(`/${url}/files`);
  },
  getAllDataModel: () => {
    return axiosAPI.get(`/${url}/models`);
  },
};

export default resourcesAdminApi;
