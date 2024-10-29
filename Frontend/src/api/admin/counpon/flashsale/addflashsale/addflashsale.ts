import { axiosAPI } from 'src/api/axiosApi';

const url = '/admin/flash-sale/list-product';

const addFlashsaleApi = {
  getAllProductSelect: () => {
    return axiosAPI.get(`${url}`);
  },
};

export default addFlashsaleApi;
