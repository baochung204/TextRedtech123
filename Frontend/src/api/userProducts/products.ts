import { axiosAPI } from '../axiosApi';
const url = 'products';
export interface PropProducts {
  page?: number | null | undefined;
  size?: number | null | undefined;
  sortDir?: boolean | null | undefined;
  category?: string | null | undefined;
}

const productsApi = {
  // getAllProducts: (
  //   page?: number | undefined,
  //   size?: number | undefined,
  //   sortDir?: boolean | undefined,
  // ) => {
  //   return axiosAPI.get(`/${url}?page=${page}&size=${size}&sort_dir=${sortDir}`);
  // },
  getAllProducts: (object: PropProducts = {}) => {
    // Construct query parameters
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

    const fullUrl = query ? `/${url}?${query}` : `/${url}`;
    return axiosAPI.get(fullUrl);
  },

  getProductById: (id: number | string) => {
    return axiosAPI.get(`/${url}/${id}`);
  },
};
export default productsApi;
