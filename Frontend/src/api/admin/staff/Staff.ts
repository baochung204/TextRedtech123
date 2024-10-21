import { axiosAPI } from 'src/api/axiosApi';

const url = 'nhan-vien';

const userApi = {
  getAllstaff: () => {
    return axiosAPI.get(`/${url}/danh-sach`);
  },
};

export default userApi;
