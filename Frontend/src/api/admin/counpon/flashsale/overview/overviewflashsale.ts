import { axiosAPI } from 'src/api/axiosApi';

const url = '/admin/flash-sale/overview-flashsale';

const overviewFlashsaleApi = {
  getAllOverviewFlashsale: () => {
    return axiosAPI.get(`${url}`);
  },
};

export default overviewFlashsaleApi;
