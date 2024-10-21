import { axiosAPI } from 'src/api/axiosApi';

const url = 'redtech/user/blogs';

const BlogApi = {
  getAllBlogs: () => {
    return axiosAPI.get(`/${url}`);
  },
};
export default BlogApi;
