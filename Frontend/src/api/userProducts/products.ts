import { axiosAPI } from '../axiosApi';
const url = 'products';
export interface PropProducts {
  page?: number | null | undefined;
  size?: number | null | undefined;
  sort_by?: string | null | undefined;
  sort_dir?: string | null | undefined;
  category?: string | null | undefined;
  search_name?: string | null | undefined;
}

const productsApi = {
  getAllProducts: (object: PropProducts = {}) => {
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
