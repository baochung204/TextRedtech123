import { axiosAPI } from 'src/api/axiosApi';

const url = 'nhan-vien/overview-employee';

const overviewStaffApi = {
  getAllOverviewStaff: () => {
    return axiosAPI.get(`/${url}`);
  },
};

export default overviewStaffApi;
