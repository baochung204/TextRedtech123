import { axiosAPI } from 'src/api/axiosApi';

const url = 'flash-sale/paginate';

const FlashSaleListApi = {
  getFlashSaleList: () => {
    return axiosAPI.get(`/${url}`);
  },
};

export default FlashSaleListApi;
