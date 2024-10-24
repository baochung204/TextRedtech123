import { axiosAPI } from '../axiosApi';

const url = 'chatbots';

const assistantAPi = {
  getAllAssistant: () => {
    return axiosAPI.get(`/${url}`);
  },
  getAssistantById: (id: number) => {
    return axiosAPI.get(`/${url}/${id}`);
  },
  getChartByID: (chatbotID: number, startDate?: Date, endDate?: Date) => {
    const urls = `${url}/${chatbotID}/chart`;
    if (startDate) {
      return axiosAPI.get(`/${urls}?start-date=${startDate}/type-chart='revenue'`)
    }
  }
};

export default assistantAPi;
