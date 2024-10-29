import { axiosAPI } from 'src/api/axiosApi';

// const url = 'redtech/user/blogs';

const dashboardApi = {
  getSelectAssistant: () => {
    return axiosAPI.get(`/chatbots/chat-bot-in-search`);
  },
};
export default dashboardApi;
