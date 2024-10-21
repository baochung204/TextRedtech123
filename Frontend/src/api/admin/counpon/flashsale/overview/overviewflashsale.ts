import { axiosAPI } from 'src/api/axiosApi';

const url = 'flash-sale/overview-flashsale';

const overviewFlashsaleApi = {
  getAllOverviewFlashsale: () => {
    return axiosAPI.get(`/${url}`);
  },
};

export default overviewFlashsaleApi;
