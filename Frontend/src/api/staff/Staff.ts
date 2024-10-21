import { axiosAPI } from '../axiosApi';

const url = 'nhan-vien';

const userApi = {
  getAllstaff: (
    page_no?: number,
    page_size?: number,
    sort_by?: string,
    sort_dir?: string,
    search_key?: string,
    begin?: string,
    end?: string,
  ) => {
    return axiosAPI.get(
      `/${url}/danh-sach?page_size=${page_no}&page_size=${page_size}&sort_by=${sort_by}&sort_dir=${sort_dir}&search_key=${search_key}&begin=${begin}&end=${end}`,
    );
  },
};

export default userApi;
