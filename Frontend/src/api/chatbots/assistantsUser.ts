import { axiosAPI } from '../axiosApi';

const url = 'chatbots';

const assistantAPi = {
  getAllAssistant: () => {
    return axiosAPI.get(`/${url}`);
  },
  getAssistantById: (id: number) => {
    return axiosAPI.get(`/${url}/${id}`);
  },
  getChartByID: (chatbotID: number, typeChart: string, startDate?: Date, endDate?: Date, ) => {
    const urls = `${url}/${chatbotID}/chart?type-chart=${typeChart}`;
    if (startDate) {
      if (endDate) {
        return axiosAPI.get(`/${urls}?start-date=${startDate}/end-dat${endDate}`)
      }
      return axiosAPI.get(`/${urls}?start-date=${startDate}`)
    }
    return axiosAPI.get(`/${urls}`)
  }
};

export default assistantAPi;
