import { axiosAPI } from 'src/api/axiosApi';

const url = 'redtech/blog/overview';

const overviewBlogApi = {
  getAllOverview: () => {
    return axiosAPI.get(`/${url}`);
  },
};

export default overviewBlogApi;
