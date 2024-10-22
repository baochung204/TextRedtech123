import { axiosAPI } from '../axiosApi';

const url = 'chatbots';

const assistantAPi = {
  getAllAssistant: () => {
    return axiosAPI.get(`/${url}`);
  },
  getAssistantById: (id: number) => {
    return axiosAPI.get(`/${url}/${id}`);
  },
};

export default assistantAPi;
