
import { axiosAPI } from '../axiosApi';


export interface PropsData {
  type_chart?: string | null | undefined,
  start_date?: string | null | undefined,
  end_date?: string | null | undefined
}


const url = 'chatbots';

const assistantAPi = {
  getAllAssistant: () => {
    return axiosAPI.get(`/${url}`);
  },
  getAssistantById: (id: number) => {
    return axiosAPI.get(`/${url}/${id}`);
  },
  getChartByID: (chatbot_id: number, object?: PropsData) => {
    const urls = `${url}/${chatbot_id}/chart`;
    if (object) {
      const query = Object.entries(object)
        .filter(([, value]) => value !== null && value !== undefined)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
      const fullUrl = query ? `${urls}?${query}` : urls;
      return axiosAPI.get(`${fullUrl}`);
    }
    return axiosAPI.get(`${urls}`);

  }
};

export default assistantAPi;
