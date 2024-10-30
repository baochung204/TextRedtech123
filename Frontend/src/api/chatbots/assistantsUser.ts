import { axiosAPI } from '../axiosApi';

export interface PropsData {
  type_chart?: string | null | undefined;
  start_date?: string | null | undefined;
  end_date?: string | null | undefined;
}

const url = 'chatbots';

export interface PropsAssistant {
  sort_by?: string | null | undefined;
  sort_dir?: boolean | null | undefined;
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
  },
  getAssistantConfigById: (id: number) => {
    return axiosAPI.get(`/${url}/${id}/config`);
  },
};

export default assistantAPi;
