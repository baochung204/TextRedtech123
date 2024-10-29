import { axiosAPI } from '../axiosApi';

const url = 'chatbots';

export interface PropsAssistant {
  sort_by?: string | null | undefined;
}
const assistantAPi = {
  getAllAssistant: (object: PropsAssistant = {}) => {
    const query = Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    const fullUrl = query ? `/${url}?${query}` : `/${url}`;
    return axiosAPI.get(fullUrl);
  },
  getAssistantById: (id: number) => {
    return axiosAPI.get(`/${url}/${id}`);
  },
  getChartByID: (chatbotID: number, typeChart: string, startDate?: Date, endDate?: Date) => {
    const urls = `${url}/${chatbotID}/chart?type-chart=${typeChart}`;
    if (startDate) {
      if (endDate) {
        return axiosAPI.get(`/${urls}?start-date=${startDate}/end-dat${endDate}`);
      }
      return axiosAPI.get(`/${urls}?start-date=${startDate}`);
    }
    return axiosAPI.get(`/${urls}`);
  },
};

export default assistantAPi;
