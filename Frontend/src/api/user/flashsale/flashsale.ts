import { axiosAPI } from 'src/api/axiosApi';

const url = 'products/random/flash-sale';

const flashSaleApi = {
  getFlashSaleRandom: () => {
    return axiosAPI.get(`/${url}`);
  },
};

export default flashSaleApi;
