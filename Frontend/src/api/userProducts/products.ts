import { axiosAPI } from '../axiosApi';

const url = 'products';
const productsApi = {
  getAllProducts: (
    page?: number | undefined,
    size?: number | undefined,
    sortDir?: boolean | undefined,
  ) => {
    return axiosAPI.get(`/${url}?page=${page}&size=${size}&&sort-dir=${sortDir}`);
  },
  getProductById: (id: number | string) => {
    return axiosAPI.get(`/${url}/${id}`);
  },
};
export default productsApi;
